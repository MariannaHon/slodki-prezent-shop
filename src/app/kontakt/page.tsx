
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
           <div className={css['contact-content-map']}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.278662243402!2d20.940535877105304!3d52.21980557199544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbe6c42c3e25%3A0x3aee6b8a8d9ef013!2sJana%20Kazimierza%2011A%2C%2001-248%20Warszawa!5e0!3m2!1spl!2spl!4v1735392000000!5m2!1spl!2spl"
              width="690"
              height="670"
              style={{ border: 0, borderRadius: '0.8rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={css['contact-bottom']}>
          <h2 className='section-title mb-16'>Znajdź nas w mediach społecznościowych</h2>
          <p className='sub-title w416 mb-40'>Śledź nasze najnowsze produkty, promocje i inspiracje na słodkie prezenty. </p>
          <ul className={css['contact-bottom-list']}>
            <li>
                <Link className={css['contact-bottom-list-link']} href="https://www.facebook.com/people/Slodki-Prezent/61582330476976/" target="_blank">
                    <svg className={css['contact-bottom-list-link-icon']}>
                        <use href="/icons.svg#icon-fb"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['contact-bottom-list-link']} href="https://www.instagram.com/slodkiprezentpl/" target="_blank">
                    <svg className={css['contact-bottom-list-link-icon']}>
                        <use href="/icons.svg#icon-inst"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link className={css['contact-bottom-list-link']} href="https://www.tiktok.com/@slodkiprezent.pl?_t=ZN-8zyhQUgNubO&_r=1" target="_blank">
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
