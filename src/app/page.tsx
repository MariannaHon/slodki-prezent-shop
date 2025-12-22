'use client'

import Image from "next/image";
import css from "./page.module.scss";
import Holidays from "./components/Holidays/Holidays";
import Recommendations from "./components/Recommendations/Recommendations";
import Clients from "./components/Clients/Clients";
import ONas from "./components/ONas/ONas";
import Popular from "./components/Popular/Popular";
import Blog from './components/Blog/Blog'
import Skontaktuj from "./components/Skontaktuj/Skontaktuj";

import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";

import { fetchProducts } from '../redux/products/operations';
import { fetchArticles } from "../redux/blog/operations";
import { fetchHolidays } from "../redux/holidays/operations";
import { RootState } from "../redux/store";



export default function Home() {

  const filters = useSelector((state: RootState) => state.filters);
  const { page, perPage } = useSelector((state: RootState) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({
        page,
        perPage,
        dlaKogo: filters.dlaKogo,
        swieta: filters.swieta,
        cena: filters.cena,
    }));
    dispatch(fetchArticles());
    dispatch(fetchHolidays());
  }, [dispatch, page, perPage, filters]);

  return (
    <main>
      <div>
        <div className={css.hero}>
          <div className={css["hero-left"]}>
            <h1 className='main-title mb-24'>Ekskluzywne Boksy Prezentowe dla Firm</h1>
            <p className={css['hero-left-text']}>Spersonalizowane zestawy słodyczy i alkoholi premium dla Twoich klientów i partnerów biznesowych</p>
            <div className={css['hero-left-wrapper']}>
              <button className={css["hero-left-wrapper-btn-brown"]}>Zamów Teraz</button>
              <button className={css["hero-left-wrapper-btn-white"]}>Zobacz Katalog</button>
            </div>
          </div>
          <Image
                priority
                src="/images/hero.png"
                width="532"
                height="542"
                alt="Sweet present"
          />

        </div>
        <Holidays />
        <Recommendations />
        <Clients />
        <ONas />
        <Popular />
        <div className={css.about}>
          <Image
            priority
            src="/images/about.png"
            width="588"
            height="504"
            alt="Give a present"
          />
          <div className={css['about-content']}>
            <h3 className={css['about-content-title']}>Zaskocz swoich partnerów biznesowych prezentem z klasą</h3>
            <p className="mb-24">Ekskluzywne zestawy upominkowe, które robią wrażenie</p>
            <p className={css['about-content-subtitle']}>Punkty wyróżniające:</p>
            <ul className={css['about-content-list']}>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Idealne na święta, jubileusze i podziękowania</p>
              </li>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Wysokiej jakości słodycze i alkohole</p>
              </li>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Personalizacja opakowań i bilecików</p>
              </li>
            </ul>
            <p className={css['about-content-text']}>Szukasz wyjątkowego prezentu dla klientów, kontrahentów lub pracowników? W słodki-prezent tworzymy ekskluzywne zestawy upominkowe, które łączą w sobie elegancję, smak i dbałość o każdy detal. W naszych paczkach znajdziesz wyselekcjonowane słodycze rzemieślnicze oraz wysokogatunkowe alkohole, zapakowane w sposób, który zachwyci każdego obdarowanego.
Nasze prezenty doskonale sprawdzają się jako forma podziękowania, element budowania relacji biznesowych czy motywacji pracowników. Postaw na jakość i estetykę, która podkreśli profesjonalizm Twojej marki.</p>
          </div>
        </div>
        <div className={css.about}>
          <div className={css['about-content']}>
            <h3 className={css['about-content-title']}>Prezenty, które mówią więcej niż słowa</h3>
            <p className='mb-24'>Buduj relacje biznesowe poprzez przemyślane gesty</p>
            <p className={css['about-content-subtitle']}>Punkty wyróżniające:</p>
            <ul className={css['about-content-list']}>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Gotowe zestawy i możliwość zamówień indywidualnych</p>
              </li>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Dostawa na terenie całej Polski</p>
              </li>
              <li className={css['about-content-list-item']}>
                <svg className={css['about-content-list-item-icon']}>
                    <use href="/icons.svg#icon-check"></use>
                </svg>
                <p>Obsługa zamówień hurtowych i ekspresowych</p>
              </li>
            </ul>
            <p className={css['about-content-text']}>Upominek to coś więcej niż przedmiot — to komunikat. W świecie biznesu liczy się pierwsze wrażenie i umiejętność pokazania, że relacje są dla Ciebie ważne. Dlatego w słodki-prezent tworzymy zestawy, które robią różnicę: eleganckie, smaczne i zapadające w pamięć.
Oferujemy gotowe kompozycje, ale również możliwość przygotowania zestawów na indywidualne zamówienie. Obsługujemy zarówno pojedyncze zamówienia, jak i duże projekty korporacyjne. Zadbaj o swój wizerunek dzięki prezentom, które świadczą o klasie i dbałości o detale.</p>
          </div>
          <Image
            className={css['about-img']}
            priority
            src="/images/presents.png"
            width="588"
            height="477"
            alt="Create a present"
          />
        </div>
        <Blog />
        <Skontaktuj />
      </div>
    </main>
  );
}
