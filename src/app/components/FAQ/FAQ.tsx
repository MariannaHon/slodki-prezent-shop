
'use client';

import Link from "next/link"
import css from './FAQ.module.scss';


import * as Accordion from '@radix-ui/react-accordion';

const FAQ = () => {
  return (
    <div className={css.faq}>
          <h2 className="section-title mb-40">Masz pytania? Mamy odpowiedzi! 🎀</h2>
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-1"
            className={css['faq-list']}
          >
            <Accordion.Item value="item-1" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Co wchodzi w skład słodkich zestawów?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Każdy zestaw zawiera asortyment cukierków, batoników, czekolady i innych słodyczy. Skład zależy od wybranego zestawu. Szczegółowy opis znajduje się na stronie każdego produktu.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-1" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Czy mogę skomponować własny zestaw?</h4>
                    </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className={css['faq-content']}>
                        <p>Tak, oferujemy zarówno gotowe zestawy, jak i możliwość stworzenia własnego: wybierasz ulubione słodycze, a my je pięknie zapakujemy.</p>
                    </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Czy mogę zamówić zestawy firmowe dla mojej firmy?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Tak, jak najbardziej! Współpracujemy z klientami biznesowymi, pomagamy dobrać i spersonalizować zestawy zgodnie z Twoimi potrzebami.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-4" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Jak zapakowane są zestawy?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Wszystkie słodkie boksy są zapakowane w eleganckie, prezentowe opakowania. Można również dodać swoje logo, nazwę, lub spersonalizowaną kartkę z życzeniami.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-5" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Czy macie zestawy dla dzieci?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Tak! Mamy zestawy o różnej pojemności: 300 g, 500 g, 700 g, 1000 g i 1500 g.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-6" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Jak złożyć zamówienie?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Wybierz zestaw na stronie, dodaj go do koszyka i złóż zamówienie, podając dane do dostawy. Potwierdzimy je mailowo lub telefonicznie.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-7" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg> 
                        <h4 className={css['faq-trigger-title']}>Ile kosztuje dostawa i jak szybko dotrze zamówienie?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Dostawa realizowana jest na terenie całego kraju. Koszt zależy od przewoźnika i podawany jest przy składaniu zamówienia. Czas dostawy zwykle wynosi 1-2 dni robocze.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-8" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Czy mogę zamówić dostawę bezpośrednio do obdarowanego jako prezent?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Tak, możemy wysłać zestaw prosto do odbiorcy bez paragonu w pudełku, tylko z kartką okolicznościową.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-9" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Czy obowiązuje minimalna kwota zamówienia?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Nie, nie ma minimalnej kwoty – możesz zamówić zarówno jeden zestaw, jak i większą ilość dla klientów firmowych.</p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-10" className={css['faq-list-item']}>
                <Accordion.Header className={css['faq-list-item-header']}>
                    <Accordion.Trigger className={css['faq-trigger']}>
                        <svg className={`${css['faq-list-item-plus']} ${css.icon}`}>
                            <use href="/icons.svg#icon-plus"></use>
                        </svg>
                        <svg className={`${css['faq-list-item-close']} ${css.icon}`}>
                            <use href="/icons.svg#icon-close"></use>
                        </svg>
                        <h4 className={css['faq-trigger-title']}>Jak mogę zapłacić za zamówienie?</h4>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={css['faq-content']}>
                    <p>Akceptujemy płatność kartą, przelewem internetowym oraz kartą/gotówką przy odbiorze osobistym.</p>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>

          <div className={css['faq-bottom']}>
              <p className={css['faq-bottom-text']}>Nie znalazłeś odpowiedzi?</p>
                <Link className={css['faq-bottom-btn']} href='/kontakt'>Zapytaj nas</Link>
          </div>
          
    </div>
  )
}

export default FAQ
