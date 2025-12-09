'use client';

import Image from "next/image";
import css from './PopularCard.module.scss';
import { ProductProps } from "../RecommendCard/RecommendCard";

const PopularCard: React.FC<ProductProps> = ({product}) =>  {
  return (
    <div className={css.card}>
          <Image
            className="mb-24"
            priority
            src={product.photo}
            width="282"
            height="288"
            alt="Sweet present"
          />
          <div className={css['card-content']}>
              <h3 className="card-title">{product.name}</h3>
              <p className={css['card-content-text']}>{product.description}</p>
              <div className={css['card-content-buy']}>
                  <p className={css['card-content-buy-price']}>{product.price}<span className={css['card-content-buy-price-netto']}>netto</span></p>
                  <button className={css['card-content-buy-btn']} type="button">
                      <svg className={css['card-content-buy-btn-icon']}>
                        <use href="/icons.svg#icon-cart"></use>
                    </svg>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default PopularCard
