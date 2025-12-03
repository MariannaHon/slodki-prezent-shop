
'use client';

import css from './page.module.scss';
import Form from '../components/Form/Form';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div>
      <div className='container'>
        <h1>Skontaktuj się z nami</h1>
        <p>Jesteśmy tutaj, aby pomóc Ci w wyborze idealnych słodyczy i prezentów. Napisz do nas lub zadzwoń - chętnie odpowiemy na wszystkie pytania!</p>
        <ul>
          <li>
            <svg>
              <use href="/icons.svg#icon-phone"></use>
            </svg>
            <h4>Telefon</h4>
            <a href='tel:+48736653527'>+48 736 653 527</a>
            <p>Pon-Pt: 8:00-19:00</p>
          </li>
          <li>
            <svg>
              <use href="/icons.svg#icon-mail"></use>
            </svg>
            <h4>Email</h4>
            <a href='mailto:candyboutique.manager@gmail.com'>candyboutique.manager@gmail.com</a>
            <p>Odpowiedź w 24h</p>
          </li>
          <li>
            <svg>
              <use href="/icons.svg#icon-map"></use>
            </svg>
            <h4>Adres</h4>
            <p>Ul. Jana Kazimierza 11a/4u </p>
            <p>01-248 Warszawa</p>
          </li>
          <li>
            <svg>
              <use href="/icons.svg#icon-time"></use>
            </svg>
            <h4>Godziny otwarcia</h4>
            <p>Pon-Pt: 8:00-19:00</p>
            <p>(w okresie przedświątecznym dłużej)</p>
          </li>
        </ul>
        <div>
          <Form/>
          <div></div>
        </div>
        <div>
          <h1>Znajdź nas w mediach społecznościowych</h1>
          <p>Śledź nasze najnowsze produkty, promocje i inspiracje na słodkie prezenty. </p>
          <ul className={css['footer-top-about-social']}>
            <li>
                <Link className={css['footer-top-about-social-link']} href="/">
                    <svg className={css['footer-top-about-icon']}>
                        <use href="/icons.svg#icon-fb"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['footer-top-about-social-link']} href="/">
                    <svg className={css['footer-top-about-icon']}>
                        <use href="/icons.svg#icon-inst"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['footer-top-about-social-link']} href="/">
                    <svg className={css['footer-top-about-icon']}>
                            <use href="/icons.svg#icon-tiktok"></use>
                    </svg>
                </Link>
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
