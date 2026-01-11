'use client'
import Link from "next/link"
import Image from "next/image"
import css from './page.module.scss'
import CartCard from "../components/CartCard/CartCard"

import { cartItem } from "@/src/redux/cart/slice";
import { useAppDispatch } from "@/src/redux/hooks";
import { useSelector } from "react-redux";
import { selectCart, selectAmount } from "@/src/redux/cart/selectors"
import { clearCart } from "@/src/redux/cart/slice"

const CartPage = () => {

  const cartItems = useSelector(selectCart);
  const cartAmount = useSelector(selectAmount);

  const total = cartAmount + (cartAmount * 0.23);

  const dispatch = useAppDispatch();

  const handleClearCart = () => {
      dispatch(clearCart());
  };

  // if (cartItems.length === 0) {
  //     return (
  //         <section className={css.box}>
  //             <Image
  //                 className={css.img}
  //                 src="/img/empty.png"
  //                 alt="Empty cart"
  //                 width={387}
  //                 height={286}
  //             />
  //             <h2 className="small-title">Your cart is empty</h2>
  //             <Link href="/" className={css.start}>
  //                 Start Shopping
  //             </Link>
  //         </section>
  //     );
  // }

  return (
    <main className={css.cart}>
      <h1 className="main-title mb-40 pl-120">Twój koszyk</h1>
      <section className={css['cart-top']}>
        <div className={css['cart-top-left']}>
          <ul className={css.list}>
              {cartItems.map((item: cartItem) => (
                  <li key={item.id}>
                      <CartCard item={item} />
                  </li>
              ))}
          </ul>
            <div className={css['cart-top-left-bottom']}>
              <Link className={css['cart-top-left-bottom-link']} href='/boksy'>
                <svg className={css['cart-top-left-bottom-link-icon']}>
                    <use href="/icons.svg#icon-arrow"></use>
                </svg>
                Kontynuj zakupy</Link>
              <button className={css['cart-top-left-bottom-btn']} onClick={handleClearCart}>Wyczyść koszyk</button>
            </div>
          </div>
          <div className={css['cart-top-right']}>
            <h4 className="delivery-title mb-32">Podsumowanie zamówienia</h4>
            <ul className={css['cart-top-right-list']}>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Produkty:</p>
                <p className={css['cart-top-right-list-item-name-price']}>{cartAmount}</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Rabat:</p>
                <p className={css['cart-top-right-list-item-name-price']}>0 zł</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Dostawa:</p>
                <p className="cart-title">Zostanie obliczona w kolejnym kroku</p>
              </li>
              <li className={css['cart-top-right-list-item']}>
                <p className={css['cart-top-right-list-item-name']}>Podatek/VAT:</p>
                <p className={css['cart-top-right-list-item-name-price']}>{(cartAmount * 0.23).toFixed(2)} zł</p>
              </li>
            </ul>
            <div className={css['cart-top-right-list-item']}>
              <p className={css['cart-top-right-list-item-name']}>Razem do zapłaty:</p>
              <p className={css['cart-top-right-list-item-name-price']}>{total}</p>
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
        </section>
        <div>
          <h2 className="section-title mb-40">Polecane produkty</h2>
          <ul>
            <li>
              {/* <RecommendCard/> */}
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
    </main>
  )
}

export default CartPage
