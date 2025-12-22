'use client'

import css from './Recommendations.module.scss';
import RecommendCard from '../RecommendCard/RecommendCard';
import Link from 'next/link';

import { Product } from '@/src/redux/products/slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../../../redux/hooks";
import { RootState } from '@/src/redux/store';

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';
import { fetchProducts } from '@/src/redux/products/operations';

const Recommendations = () => {
    const dispatch = useAppDispatch();

    const { page, totalPages } = useSelector((state: RootState) => state.products);
    const filters = useSelector((state: RootState) => state.filters);

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    
    const handleLoadMore = () => {
        if (page < totalPages && !isLoading) {
            dispatch(fetchProducts({
                page: page + 1,
                perPage: 6,
                dlaKogo: filters.dlaKogo,
                swieta: filters.swieta,
                cena: filters.cena,
            }));
        }
    };

  if (isLoading && page === 1) return <p>Page is loading</p>;
    if (error) return <p>Error: {error}</p>;
    if (!products.length) return <p>No products found</p>;

  return (
    <div className={css.recommend}>
        <div className="container">
            <h2 className="section-title">Nasze Rekomendacje</h2>
        <p className={css['recommend-text']}>Wybierz kategorię produktów dopasowaną do Twoich potrzeb</p>
        
          <ul className={css['recommend-list']}>{products.map((product: Product) => (
                <li key={product._id}>
                    <Link href={`/boksy/${product._id}`}>
                        <RecommendCard product={product} />
                    </Link>
                </li>
            ))}
        </ul>
            {page < totalPages && (
                <button
                    className={css['recommend-btn']}
                    type="button"
                    onClick={handleLoadMore}
                    disabled={isLoading}
                >
                    {isLoading ? 'Ładowanie...' : 'Zobacz więcej'}
                </button>
            )}
        </div>
    </div>
  )
}

export default Recommendations
