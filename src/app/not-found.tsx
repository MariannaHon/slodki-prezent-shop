"use client";

import Link from "next/link"
import css from './not-found.module.scss';
import Popular from "./components/Popular/Popular";
import { fetchProducts } from "../redux/products/operations";

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from "../redux/hooks";

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';


const NotFoundPage: React.FC = () => {

  const dispatch = useAppDispatch();

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
      if (!products.length) {
          dispatch(
              fetchProducts({
                  page: 1,
                  perPage: 12,
              })
          );
      }
  }, [dispatch, products.length]);

  if (isLoading) {
      return <p>Ładowanie...</p>;
  }

  if (error) {
      return <p>Błąd: {error}</p>;
  }

  return (
    <main className={css.lost}>
      <ul className={css['lost-nav']}>
        <li>
          <Link href="/">Wróć na stronę główną &rarr;</Link>
        </li>
        <li>
          <Link href="/boksy">Zobacz nasze boksy prezentowe &rarr;</Link>
        </li>
      </ul>
      <h1 className="main-title mb-40">Ups... tej strony nie znaleziono</h1>
      <p className="sub-title mb-40">Wygląda na to, że link jest nieprawidłowy <br/>
        lub strona została przeniesiona.</p>
      <p>Ale spokojnie - mamy dla Ciebie wiele wyjątkowych zestawów prezentowych.</p>
      
      <Popular />
    </main>
  )
}

export default NotFoundPage
