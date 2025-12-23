'use client'

import css from './Recommendations.module.scss';
import RecommendCard from '../RecommendCard/RecommendCard';
import Link from 'next/link';

import { Product } from '@/src/redux/products/slice';
import { useSelector } from 'react-redux';

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';

const Recommendations = () => {

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);


  if (isLoading) return <p>Page is loading</p>;
    if (error) return <p>Error: {error}</p>;
    if (!products.length) return <p>No products found</p>;

  return (
    <div className={css.recommend}>
        <div className="container">
            <h2 className="section-title">Nasze Rekomendacje</h2>
        <p className={css['recommend-text']}>Wybierz kategorię produktów dopasowaną do Twoich potrzeb</p>
        
          <ul className={css['recommend-list']}>{products.slice(0, 6).map((product: Product) => (
                <li key={product._id}>
                    <Link href={`/boksy/${product._id}`}>
                        <RecommendCard product={product} />
                    </Link>
                </li>
            ))}
        </ul>
                <Link
                  href="/boksy"
                  className={css['recommend-btn']}
                >Zobacz więcej</Link>
        </div>
    </div>
  )
}

export default Recommendations
