'use client';
import Image from "next/image";
import css from './RecommendCard.module.scss';

const RecommendCard = () => {
  return (
    <div className={css.card}>
        <Image
            priority
            src="/images/1.png"
            width="300"
            height="300"
            alt="Sweet present"
          />
          <div className={css['card-content']}>
              <h3 className="card-title">Czekolady Belgijskie</h3>
              <p className={css['card-content-text']}>Ekskluzywne czekolady z najlepszych manufaktur</p>
              <div className={css['card-content-buy']}>
                  <p className={css['card-content-buy-price']}>299 zł <span className={css['card-content-buy-price-netto']}>netto</span></p>
                  <button className={css['card-content-buy-btn']} type="button">Do Koszyka</button>
              </div>
          </div>
    </div>
  )
}

export default RecommendCard
