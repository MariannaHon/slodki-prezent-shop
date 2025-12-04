
'use client';

import css from './page.module.scss';
import Form from '../components/Form/Form';
import Link from 'next/link';
import FAQ from '../components/FAQ/FAQ';

const ContactPage = () => {
  return (
    <div className={css.contact}>
      <div className='container'>
        <h1 className='main-title mb-16'>Skontaktuj się z nami</h1>
        <p className='sub-title w766 mb-40'>Jesteśmy tutaj, aby pomóc Ci w wyborze idealnych słodyczy i prezentów. Napisz do nas lub zadzwoń - chętnie odpowiemy na wszystkie pytania!</p>
        <ul className={css['contact-list']}>
          <li className={css['contact-list-item']}>
            <div className={css['contact-list-item-wrapper']}>
              <svg className={css['contact-list-item-wrapper-icon']}>
                <use href="/icons.svg#icon-phone"></use>
              </svg>
            </div>
            <h4 className='card-title'>Telefon</h4>
            <a className={css['contact-list-item-text']} href='tel:+48736653527'>+48 736 653 527</a>
            <p className={css['contact-list-item-details']}>Pon-Pt: 8:00-19:00</p>
          </li>
          <li className={css['contact-list-item']}>
            <div className={css['contact-list-item-wrapper']}>
              <svg className={css['contact-list-item-wrapper-icon']}>
                <use href="/icons.svg#icon-mail"></use>
              </svg>
            </div>
            <h4 className='card-title'>Email</h4>
            <a className={css['contact-list-item-text']} href='mailto:candyboutique.manager@gmail.com'>candyboutique.manager@gmail.com</a>
            <p className={css['contact-list-item-details']}>Odpowiedź w 24h</p>
          </li>
          <li className={css['contact-list-item']}>
            <div className={css['contact-list-item-wrapper']}>
              <svg className={css['contact-list-item-wrapper-icon']}>
                <use href="/icons.svg#icon-map"></use>
              </svg>
            </div>
            <h4 className='card-title'>Adres</h4>
            <p className={css['contact-list-item-text']}>Ul. Jana Kazimierza 11a/4u </p>
            <p className={css['contact-list-item-details']}>01-248 Warszawa</p>
          </li>
          <li className={css['contact-list-item']}>
            <div className={css['contact-list-item-wrapper']}>
              <svg className={css['contact-list-item-wrapper-icon']}>
                <use href="/icons.svg#icon-time"></use>
              </svg>
            </div>
            <h4 className='card-title'>Godziny otwarcia</h4>
            <p className={css['contact-list-item-text']}>Pon-Pt: 8:00-19:00</p>
            <p className={css['contact-list-item-details']}>(w okresie przedświątecznym dłużej)</p>
          </li>
        </ul>
        <div className={css['contact-content']}>
          <Form/>
          <div></div>
        </div>
        <div className={css['contact-bottom']}>
          <h2 className='section-title mb-16'>Znajdź nas w mediach społecznościowych</h2>
          <p className='sub-title w416 mb-40'>Śledź nasze najnowsze produkty, promocje i inspiracje na słodkie prezenty. </p>
          <ul className={css['contact-bottom-list']}>
            <li>
                <Link className={css['contact-bottom-list-link']} href="/">
                    <svg className={css['contact-bottom-list-link-icon']}>
                        <use href="/icons.svg#icon-fb"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['contact-bottom-list-link']} href="/">
                    <svg className={css['contact-bottom-list-link-icon']}>
                        <use href="/icons.svg#icon-inst"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['contact-bottom-list-link']} href="/">
                    <svg className={css['contact-bottom-list-link-icon']}>
                            <use href="/icons.svg#icon-tiktok"></use>
                    </svg>
                </Link>
            </li>
        </ul>
        </div>
        <FAQ/>
      </div>
    </div>
  )
}

export default ContactPage
