'use client'
import Link from "next/link"
import Image from "next/image"
import RecommendCard from "../components/RecommendCard/RecommendCard"
import css from './page.module.scss'
import CartCard from "../components/CartCard/CartCard"

const cartPage = () => {
  return (
    <div className={css.cart}>
        <h1 className="main-title mb-40 pl-120">Twój koszyk</h1>
        <div className={css['cart-top']}>
          <div className={css['cart-top-left']}>
            <ul className={css['cart-top-left-list']}>
              <li className={css['cart-top-left-list-item']}>
                <CartCard/>
              </li>
            </ul>
            <div className={css['cart-top-left-bottom']}>
              <Link className={css['cart-top-left-bottom-link']} href='/boksy'>
                <svg className={css['cart-top-left-bottom-link-icon']}>
                    <use href="/icons.svg#icon-arrow"></use>
                </svg>
                Kontynuj zakupy</Link>
              <button className={css['cart-top-left-bottom-btn']}>Wyczyść koszyk</button>
            </div>
          </div>
          <div className={css['cart-top-right']}>
            <h4 className="delivery-title mb-32">Podsumowanie zamówienia</h4>
            <ul className={css['cart-top-right-list']}>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Produkty:</p>
                <p className={css['cart-top-right-list-item-name-price']}>1899,97 zł</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Rabat:</p>
                <p className={css['cart-top-right-list-item-name-price']}>-50,00 zł</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Dostawa:</p>
                <p className="cart-title">Zostanie obliczona w kolejnym kroku</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Podatek/VAT:</p>
                <p className={css['cart-top-right-list-item-name-price']}>379,99 zł</p>
              </li>
            </ul>
            <div className={css['cart-top-right-list-item']}>
              <p className={css['cart-top-right-list-item-name']}>Razem do zapłaty:</p>
              <p className={css['cart-top-right-list-item-name-price']}>2229,96 zł</p>
            </div>
            <ul className={css['cart-top-right-guaranty']}>
              <li className={css['cart-top-right-guaranty-item']}>
                <svg className={css['cart-top-right-guaranty-item-icon']}>
                    <use href="/icons.svg#icon-save"></use>
                </svg>
                <p className={css['cart-top-right-guaranty-item-text']}>Bezpieczna płatność</p>
              </li>
              <li className={css['cart-top-right-guaranty-item']}>
                <svg className={css['cart-top-right-guaranty-item-icon']}>
                    <use href="/icons.svg#icon-quality"></use>
                </svg>
                <p className={css['cart-top-right-guaranty-item-text']}>Gwarancja jakości</p>
              </li>
            </ul>
            <ul className={css['cart-top-right-payments']}>
              <li>
                <Image
                  priority
                  src="/images/visa.png"
                  width="50"
                  height="35"
                  alt="Visa"
                />
              </li>
              <li>
                <Image
                  priority
                  src="/images/mastercard.png"
                  width="50"
                  height="35"
                  alt="Mastercard"
                />
              </li>
              <li>
                <Image
                  priority
                  src="/images/stripe.png"
                  width="50"
                  height="35"
                  alt="Stripe"
                />
              </li>
              <li>
                <Image
                  priority
                  src="/images/paypal.png"
                  width="50"
                  height="35"
                  alt="PayPal"
                />
              </li>
              <li>
                <Image
                  priority
                  src="/images/binanse.png"
                  width="50"
                  height="35"
                  alt="Binance"
                />
              </li>
              <li>
                <Image
                  priority
                  src="/images/payment.png"
                  width="50"
                  height="35"
                  alt="Crypto"
                />
              </li>
            </ul>
            <Link className={css['cart-top-right-btn']} href='/checkout'>Przejdź do kasy</Link>
          </div>
        </div>
        <div>
          <h2 className="section-title mb-40">Polecane produkty</h2>
          <ul>
            <li>
              <RecommendCard/>
            </li>
          </ul>
        </div>
        <Image
          priority
          src="/images/przelewy.png"
          width="1440"
          height="475"
          alt="Payment methods"
        />
    </div>
  )
}

export default cartPage
