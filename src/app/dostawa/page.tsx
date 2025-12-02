
import FAQ from "../components/FAQ/FAQ";
import css from './page.module.scss';
import Link from "next/link";

const DeliveryPage = () => {
  return (
    <div className={css.delivery}>
        <div className="container">
            <h1 className='main-title mb-16'>Dostawa i Płatność</h1>
            <p className={css['delivery-sub']}>Sprawdź, jak szybko i wygodnie możesz otrzymać swoje zamówienie oraz jakie formy płatności oferujemy.</p>
            <div className={css['delivery-content']}>
                <ul className={css['delivery-content-list']}>
                    <li className={css['delivery-content-list-item']}>
                        <div className={css['delivery-content-list-item-top']}>
                            <div className={css.wrapper}>
                                <svg className={css['delivery-content-list-item-top-icon']}>
                                    <use href="/icons.svg#icon-car"></use>
                                </svg>
                            </div>
                            
                            <h2 className="section-title">Formy Dostawy</h2>
                        </div>
                        <div className={css['delivery-content-list-item-first']}>
                            <div className={css.circle}>
                                <svg className={css['delivery-content-list-item-first-icon']}>
                                    <use href="/icons.svg#icon-dpd"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>Kurier (DPD / InPost)</h4>
                                <p>Dostawa do 2 dni roboczych od momentu nadania przesyłki.</p>
                            </div>
                            
                        </div>
                          <div className={css['delivery-content-list-item-first']}>
                            <div className={css.circle}>
                                <svg className={css['delivery-content-list-item-first-icon']}>
                                    <use href="/icons.svg#icon-away"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>Odbiór osobisty (Warszawa)</h4>
                                <p>Możliwość odbioru zamówienia w naszym punkcie w Warszawie po wcześniejszym umówieniu terminu.</p>
                            </div>
                            
                        </div>
                        <div className={css['delivery-content-list-item-first-bottom']}>
                            <svg className={css['delivery-content-list-item-first-bottom-icon']}>
                                <use href="/icons.svg#icon-info"></use>
                            </svg>
                              <p>W okresie świątecznym czas dostawy może ulec wydłużeniu. Zalecamy składanie zamówień z odpowiednim wyprzedzeniem.</p>
                        </div>
                    </li>
                    <li className={css['delivery-content-list-item']}>
                          <div className={css['delivery-content-list-item-top']}>
                            <div className={css.wrapper}>
                                <svg className={css['delivery-content-list-item-top-icon']}>
                                    <use href="/icons.svg#icon-money"></use>
                                </svg>
                            </div>
                            
                            <h2 className="section-title">Koszty Dostawy</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                <th>Metoda dostawy</th>
                                <th>Koszt</th>
                                <th>Darmowa dostawa</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td>Kurier DPD/InPost</td>
                                <td>19,99 zł</td>
                                <td>Przy zamówieniach powyżej 700 zł</td>
                                </tr>
                                <tr>
                                <td>Odbiór osobisty</td>
                                <td>0 zł</td>
                                <td>Zawsze bezpłatnie</td>
                                </tr>
                            </tbody>
                        </table>
                          <div className={css['delivery-content-list-item-first-bottom']}>
                            <svg className={css['delivery-content-list-item-first-bottom-icon']}>
                                <use href="/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Dla zamówień firmowych powyżej 1000 zł oferujemy specjalne warunki dostawy. Skontaktuj się z nami, aby uzyskać indywidualną wycenę.</p>
                        </div>
                    </li>
                    <li className={css['delivery-content-list-item']}>
                        <div className={css['delivery-content-list-item-top']}>
                            <div className={css.wrapper}>
                                <svg className={css['delivery-content-list-item-top-icon']}>
                                    <use href="/icons.svg#icon-card"></use>
                                </svg>
                            </div>
                            
                            <h2 className="section-title">Formy Płatności</h2>
                        </div>
                        <p>Dla wygody naszych klientów wszystkie płatności obsługiwane są przez bezpieczną bramkę Przelewy24. Dzięki temu możesz wybrać najdogodniejszą metodę płatności:</p>
                        <ul>
                            <li>
                                <p>Szybkie przelewy online (większość polskich banków)</p>
                            </li>
                            <li>
                                <p>Karty płatnicze i kredytowe (Visa, Mastercard)</p>
                            </li>
                            <li>
                                <p>BLIK</p>
                            </li>
                            <li>
                                <p>Google Pay / Apple Pay</p>
                            </li>
                            <li>
                                <p>Tradycyjny przelew bankowy</p>
                            </li>
                        </ul>
                        <div className={css['delivery-content-list-item-first-bottom']}>
                            <svg className={css['delivery-content-list-item-first-bottom-icon']}>
                                <use href="/icons.svg#icon-card"></use>
                            </svg>
                              <p>Wszystkie transakcje realizowane są w sposób bezpieczny i szyfrowany.</p>
                        </div>
                    </li>
                    <li className={css['delivery-content-list-item']}>
                          <div className={css['delivery-content-list-item-top']}>
                            <div className={css.wrapper}>
                                <svg className={css['delivery-content-list-item-top-icon']}>
                                    <use href="/icons.svg#icon-time"></use>
                                </svg>
                            </div>
                            
                            <h2 className="section-title">Czas Realizacji</h2>
                        </div>
                          <p>Standardowy czas realizacji zamówienia wynosi od 1 do 3 dni roboczych. Czas ten nie obejmuje dostawy, która jest zależna od wybranej metody.</p>
                          <p>Etapy realizacji zamówienia:</p>
                        <ul>
                            <li>
                                <p>Potwierdzenie zamówienia (automatyczne)</p>
                            </li>
                            <li>
                                <p>Weryfikacja i kompletowanie zamówienia (1-2 dni robocze)</p>
                            </li>
                            <li>
                                <p>Pakowanie i przygotowanie do wysyłki (1 dzień roboczy)</p>
                            </li>
                            <li>
                                <p>Przekazanie przesyłki do dostawcy</p>
                            </li>
                          </ul>
                          <div className={css['delivery-content-list-item-first-bottom']}>
                            <svg className={css['delivery-content-list-item-first-bottom-icon']}>
                                <use href="/icons.svg#icon-firm"></use>
                            </svg>
                            <p>Dla dużych zamówień firmowych czas realizacji ustalamy indywidualnie. Jesteśmy w stanie dostosować się do Twoich potrzeb i terminów – skontaktuj się z nami, aby omówić szczegóły.</p>
                        </div>
                    </li>
                </ul>
                <div>
                    <h3>Potrzebujesz pomocy?</h3>
                    <p>Nasz zespół jest dostępny od poniedziałku do piątku w godzinach 8:00-19:00</p>
                    <ul>
                        <li>
                            <svg>
                                <use href="/icons.svg#icon-map"></use>
                            </svg>
                            <p>Ul. Jana Kazimierza 11a/4u <br/>01-248 Warszawa</p>
                        </li>
                        <li>
                            <svg>
                                <use href="/icons.svg#icon-phone"></use>
                            </svg>
                            <a href="tel:+48736653527">+48 736 653 527</a>
                        </li>
                        <li>
                            <svg>
                                <use href="/icons.svg#icon-mail"></use>
                            </svg>
                            <a href="mailto:candyboutique.manager@gmail.com">candyboutique.manager@gmail.com</a>
                        </li>
                    </ul>
                    <Link href="/kontakt">Formularz kontaktowy</Link>
                </div>
            </div>
            <FAQ/>
        </div>
    </div>
  )
}

export default DeliveryPage
