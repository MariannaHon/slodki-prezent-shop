'use client'
import Link from "next/link"
import Image from "next/image"

const cartPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Twój koszyk</h1>
        <div>
          <div>
            <ul>
              <li></li>
            </ul>
            <Link href='/boksy'>
              <svg>
                  <use href="/icons.svg#icon-arrow"></use>
              </svg>
              Kontynuj zakupy</Link>
            <button>Wyczyść koszyk</button>
          </div>
          <div>
            <h4>Podsumowanie zamówienia</h4>
            <ul>
              <li>
                <p>Produkty:</p>
                <p>1899,97 zł</p>
              </li>
              <li>
                <p>Rabat:</p>
                <p>-50,00 zł</p>
              </li>
              <li>
                <p>Dostawa:</p>
                <p>Zostanie obliczona w kolejnym kroku</p>
              </li>
              <li>
                <p>Podatek/VAT:</p>
                <p>379,99 zł</p>
              </li>
            </ul>
            <div>
              <p>Razem do zapłaty:</p>
              <p>2229,96 zł</p>
            </div>
            <div></div>
            <ul>
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
            <Link href='/checkout'>Przejdź do kasy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cartPage
