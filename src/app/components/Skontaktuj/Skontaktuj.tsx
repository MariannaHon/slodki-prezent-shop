'use client';

import Link from "next/link";
import css from './Skontaktuj.module.scss'

const Skontaktuj = () => {
  return (
    <div className={css.skontaktuj}>
          <div className={`container ${css['skontaktuj-content']}`}>
              <h2 className={css['skontaktuj-content-title']}>Przygotuj wyjątkowe prezenty dla swoich klientów</h2>
              <p className={css['skontaktuj-content-text']}>Skontaktuj się z nami, aby omówić indywidualną ofertę dla Twojej firmy. Przygotujemy propozycję dopasowaną do Twoich potrzeb i budżetu.</p>
              <div className={css['skontaktuj-content-buttons']}>
                <Link className={css['skontaktuj-content-buttons-link']} href='/kontakt'>Skontaktuj się z nami</Link>
                <a className={css['skontaktuj-content-buttons-btn']}
                  href="/katalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download>Pobierz katalog</a>
              </div>
          </div>
    </div>
  )
}

export default Skontaktuj
