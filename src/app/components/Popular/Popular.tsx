'use client';

import css from "./Popular.module.scss";
import PopularCard from "../PopularCard/PopularCard";

import { Product } from '@/src/redux/products/slice';
import { useSelector } from 'react-redux';

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';

const Popular = () => {

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
      return <p>Page is loading</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!products) {
      return <p>No products found</p>;
  }

  return (
    <div className="container">
          <div className={css.popular}>
        <h1 className="section-title mb-40">Najpopularniejsze zestawy</h1>
        
        <ul>{products.map((product: Product) => (
              <li className={css.item} key={product._id}>
                  <PopularCard product={product} />
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Popular
