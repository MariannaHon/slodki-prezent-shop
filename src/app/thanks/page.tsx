
'use client';

import css from "./page.module.scss"

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';
import { useAppDispatch } from "@/src/redux/hooks";

import { clearCart } from '@/src/redux/cart/slice';

import Skontaktuj from "../components/Skontaktuj/Skontaktuj";

import { useSearchParams } from 'next/navigation';

const ThanksPage = () => {

  const path = usePathname();

  const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(clearCart());
      }, [dispatch]);
  
  const searchParams = useSearchParams();

  const sessionId = searchParams.get('session_id');

  const [email, setEmail] = useState('');

  useEffect(() => {

  const fetchSession = async () => {

    const res = await fetch(
      `https://slodki-prezent-db.onrender.com/session/${sessionId}`
    );

    const data = await res.json();

    if (data.paymentStatus === 'paid') {
      setEmail(data.email);

      dispatch(clearCart());
    }
  };

  if (sessionId) {
    fetchSession();
  }

}, [sessionId, dispatch]);

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
    <h1 className="main-title">Dziękujemy za zakup!</h1>
    <p className="sub-title">Twoje zamówienie zostało opłacone.</p>
    <ul className={css['thanks-list']}>
      <li className={css['thanks-list-item']}>przygotujemy zamówienie w ciągu 24h</li>
      <li className={css['thanks-list-item']}>wyślemy email z potwierdzeniem</li>
      <li className={css['thanks-list-item']}>dostawa 1-3 dni robocze</li>
    </ul>
    <p className={css['thanks-email']}>Potwierdzenie zostało wysłane na email: <br />
      {email}</p>
    <Skontaktuj />
  </main>
  )
}

export default ThanksPage






