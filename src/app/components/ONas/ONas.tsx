'use client';

import Image from "next/image";
import Link from 'next/link';
import css from './ONas.module.scss';

const ONas = () => {
  return (
    <div className="container" >
        <div className={css.about}>
              <Image
                className={css['about-img']}
                priority
                src="/images/presents.png"
                width="580"
                height="384"
                alt="People creating sweet presents"
            />
            <div className={css['about-content']}>
                  <h2 className="section-title mb-24">O Nas</h2>
                  <h4 className={css['about-content-title']}>Spraw, aby pracownicy byli szczęśliwi — a oni w zamian <br/>uszczęśliwią Ciebie!</h4>
                  <p className={css['about-content-text']}>A pomożemy Ci w tym my — firma Słodki Prezent, specjalista w tworzeniu słodkich prezentów dla dorosłych i dzieci. Współpracujemy z klientami korporacyjnymi w całej Polsce, przygotowując prezenty dla firm i organizacji na najważniejsze święta oraz urodziny firm.</p>
                  <div className={css['about-content-bottom']}>
                      <Link className={css['about-content-bottom-btn']} href="/about">Czytaj więcej</Link>
                      <ul className={css['about-content-bottom-list']}>
                        <li className={css['about-content-bottom-list-item']}>
                            <Link href="https://www.facebook.com/people/Slodki-Prezent/61582330476976/" target="_blank">
                                <svg className={css['about-content-bottom-list-item-icon']}>
                                    <use href="/icons.svg#icon-fb"></use>
                                </svg>
                            </Link>
                            
                        </li>
                        <li className={css['about-content-bottom-list-item']}>
                            <Link href="https://www.instagram.com/slodkiprezentpl/" target="_blank">
                                <svg className={css['about-content-bottom-list-item-icon']}>
                                    <use href="/icons.svg#icon-inst"></use>
                                </svg>
                            </Link>
                            
                        </li>
                        <li className={css['about-content-bottom-list-item']}>
                            <Link href="https://www.tiktok.com/@slodkiprezent.pl?_t=ZN-8zyhQUgNubO&_r=1" target="_blank">
                                <svg className={css['about-content-bottom-list-item-icon']}>
                                    <use href="/icons.svg#icon-tiktok"></use>
                                </svg>
                            </Link>
                            
                        </li>
                      </ul>
                  </div>
                  
            </div>
        </div>
    </div>
  )
}

export default ONas
