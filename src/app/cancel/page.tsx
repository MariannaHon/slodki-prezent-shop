'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

import Skontaktuj from "../components/Skontaktuj/Skontaktuj";

import css from "./page.module.scss";
import { useAppDispatch } from "@/src/redux/hooks";

const CancelPage = () => {

  const path = usePathname();
  
  const dispatch = useAppDispatch();

  return (
    <main className={css.cancel}>
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
                    path === '/cancel'
                        ? 'nav-active'
                        : 'nav-item'
                }
            >
            Cancel
            </li>
        </ul>
      </nav>

      <h1 className="main-title">Nie udało się opłacić zamówienia</h1>
      <p className="sub-title">Twoje zamówienie nie zostało opłacone. <br/>
        Nie martw się — produkty nadal znajdują się w koszyku.</p>
      <p className={css['cancel-text']}>Możliwe przyczyny:</p>
      <ul className={css['cancel-list']}>
        <li className={css['cancel-list-item']}>Anulowanie płatności</li>
        <li className={css['cancel-list-item']}>Brak środków na koncie</li>
        <li className={css['cancel-list-item']}>Błąd w danych płatności</li>
        <li className={css['cancel-list-item']}>Przerwane połączenie</li>
      </ul>
      <p className={css['cancel-again']}>Spróbuj ponownie!</p>
      <Link href="/cart">Wróć do koszyka &rarr;</Link>
      <Skontaktuj />
    </main>
  )
}

export default CancelPage
