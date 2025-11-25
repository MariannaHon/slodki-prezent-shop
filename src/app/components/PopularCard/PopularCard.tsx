'use client';

import Image from "next/image";
import css from './PopularCard.module.scss';

const PopularCard = () => {
  return (
    <div>
        <Image
            priority
            src="/images/1.png"
            width="282"
            height="288"
            alt="Sweet present"
          />
          <div>
              <h3 className="card-title">Zestaw Connoisseur</h3>
              <p>Ekskluzywny zestaw z koniakiem, czekoladami premium i eleganckimi dodatkami.</p>
              <div className={css['card-content-buy']}>
                  <p>499 zł <span >netto</span></p>
                  <button type="button">
                      <svg >
                        <use href="/icons.svg#icon-cart"></use>
                    </svg>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default PopularCard
