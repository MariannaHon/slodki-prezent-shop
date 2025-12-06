
import Image from "next/image"

import css from './CartCard.module.scss'

const CartCard = () => {
  return (
    <div className={css.card}>
      <Image
            priority
            className={css['card-img']}
            src="/images/hero.png"
            width="120"
            height="120"
            alt="Sweet present"
          />
        <div className={css['card-content']}>
            <h4 className="card-title mb-24">Czekolady Belgijskie</h4>
            <div className={css['card-content-close']}>
                <svg className={css['card-content-close-icon']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
            </div>  
            <ul className={css['card-content-list']}>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title mb-8">Cena:</p>
                    <p className="cart-title"><span className="card-title">299 zł </span>netto</p>
                </li>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title">Ilość:</p>
                    <div className={css['card-content-list-item-add']}>
                        <button className={css['card-content-list-item-add-btn']}>
                            <svg className={css['card-content-list-item-add-btn-icon']}>
                                <use href="/icons.svg#icon-minus"></use>
                            </svg>
                        </button>
                        <p className={css['card-content-list-item-add-amount']}>1</p>
                        <button className={css['card-content-list-item-add-btn']}>
                            <svg className={css['card-content-list-item-add-btn-icon']}>
                                <use href="/icons.svg#icon-plus"></use>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title mb-8">Razem</p>
                    <p className="cart-title"><span className="card-title">299 zł </span>netto</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CartCard
