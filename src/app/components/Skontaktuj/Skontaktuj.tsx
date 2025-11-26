'use client';

import Link from "next/link";
import css from './Skontaktuj.module.scss'

const Skontaktuj = () => {
  return (
    <div>
          <div className="container">
              <h2>Przygotuj wyjątkowe prezenty dla swoich klientów</h2>
              <p>Skontaktuj się z nami, aby omówić indywidualną ofertę dla Twojej firmy. Przygotujemy propozycję dopasowaną do Twoich potrzeb i budżetu.</p>
              <Link href='/contact'>Skontaktuj się z nami</Link>
              <button type="button">Pobierz katalog</button>
          </div>
    </div>
  )
}

export default Skontaktuj
