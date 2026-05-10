
'use client';

import css from "./page.module.scss"

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useEffect } from 'react';
import { useAppDispatch } from "@/src/redux/hooks";

import { clearCart } from '@/src/redux/cart/slice';

const ThanksPage = () => {

  const path = usePathname();

  const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(clearCart());
      }, [dispatch]);

  return (
    <main className={css.thanks}>
      <nav>
        <ul className='nav'>
            <li
                className={
                    path === '/' ? 'nav-active' : 'nav-item'
                }
            >
                <Link href="/">Strona główna</Link>
            </li>
            <span className={css.arrow}>&gt;</span>
            <li
                className={
                    path === '/thanks'
                        ? 'nav-active'
                        : 'nav-item'
                }
            >
            Thanks
            </li>
        </ul>
    </nav>
    <h1 className={css['thanks-title']}>Dziękujemy za zakup!</h1>
    <p className={css['thanks-text']}>Twoje zamówienie zostało opłacone.</p>
    <ul className={css['thanks-list']}>
      <li className={css['thanks-list-item']}>przygotujemy zamówienie w ciągu 24h</li>
      <li className={css['thanks-list-item']}>wyślemy email z potwierdzeniem</li>
      <li className={css['thanks-list-item']}>dostawa 1-3 dni robocze</li>
    </ul>
  </main>
  )
}

export default ThanksPage






