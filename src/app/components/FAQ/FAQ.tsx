
import Link from "next/link"
import css from './FAQ.module.scss';

const FAQ = () => {
  return (
    <div className={css.faq}>
          <h2 className="section-title mb-40">Masz pytania? Mamy odpowiedzi! 🎀</h2>
          <ul className={css['faq-list']}>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Co wchodzi w skład słodkich zestawów?</h4>
                    <p>Każdy zestaw zawiera asortyment cukierków, batoników, czekolady i innych słodyczy. Skład zależy od wybranego zestawu. Szczegółowy opis znajduje się na stronie każdego produktu.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Czy mogę skomponować własny zestaw?</h4>
                    <p>Tak, oferujemy zarówno gotowe zestawy, jak i możliwość stworzenia własnego: wybierasz ulubione słodycze, a my je pięknie zapakujemy.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Czy mogę zamówić zestawy firmowe dla mojej firmy?</h4>
                    <p>Tak, jak najbardziej! Współpracujemy z klientami biznesowymi, pomagamy dobrać i spersonalizować zestawy zgodnie z Twoimi potrzebami.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Jak zapakowane są zestawy?</h4>
                    <p>Wszystkie słodkie boksy są zapakowane w eleganckie, prezentowe opakowania. Można również dodać swoje logo, nazwę, lub spersonalizowaną kartkę z życzeniami.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Czy macie zestawy dla dzieci?</h4>
                    <p>Tak! Mamy zestawy o różnej pojemności: 300 g, 500 g, 700 g, 1000 g i 1500 g.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Jak złożyć zamówienie?</h4>
                    <p>Wybierz zestaw na stronie, dodaj go do koszyka i złóż zamówienie, podając dane do dostawy. Potwierdzimy je mailowo lub telefonicznie.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>   
                    <h4 className="mb-16 pl-20">Ile kosztuje dostawa i jak szybko dotrze zamówienie?</h4>
                    <p>Dostawa realizowana jest na terenie całego kraju. Koszt zależy od przewoźnika i podawany jest przy składaniu zamówienia. Czas dostawy zwykle wynosi 1-2 dni robocze.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Czy mogę zamówić dostawę bezpośrednio do obdarowanego jako prezent?</h4>
                    <p>Tak, możemy wysłać zestaw prosto do odbiorcy bez paragonu w pudełku, tylko z kartką okolicznościową.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Czy obowiązuje minimalna kwota zamówienia?</h4>
                    <p>Nie, nie ma minimalnej kwoty – możesz zamówić zarówno jeden zestaw, jak i większą ilość dla klientów firmowych.</p>
                </div>
                
            </li>
            <li className={css['faq-list-item']}>
                <svg className={css['faq-list-item-plus']}>
                    <use href="/icons.svg#icon-plus"></use>
                </svg>
                <svg className={css['faq-list-item-close']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
                <div>
                    <h4 className="mb-16 pl-20">Jak mogę zapłacić za zamówienie?</h4>
                    <p>Akceptujemy płatność kartą, przelewem internetowym oraz kartą/gotówką przy odbiorze osobistym.</p>
                </div>
                
            </li>
          </ul>
          <div className={css['faq-bottom']}>
              <p className={css['faq-bottom-text']}>Nie znalazłeś odpowiedzi?</p>
                <Link className={css['faq-bottom-btn']} href='/kontakt'>Zapytaj nas</Link>
          </div>
          
    </div>
  )
}

export default FAQ
