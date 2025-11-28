import css from "./Footer.module.scss";
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className={css.footer}>
          <div className="container">
            <div className={css['footer-top']}>
                  <div className={css['footer-top-about']}>
                      <Link href="/"><svg className={css['footer-logo']}
                            width="213"
                            height="48"
                        >
                            <use href="/icons.svg#icon-logo"></use>
                    </svg></Link>
                        
                        <p className={css['footer-top-about-text']}>Ekskluzywne kosze upominkowe dla firm. Buduj relacje biznesowe poprzez wyjątkowe prezenty.</p>
                        
                        <ul className={css['footer-top-about-nip']}>
                            <li><p>NIP: 1133146128</p></li>
                            <li><p>REGON: 529681192</p></li>
                            <li><p>KRS: 0001127926</p></li>
                        </ul>
                    <ul className={css['footer-top-about-social']}>
                        <li>
                            <Link className={css['footer-top-about-social-link']} href="/">
                                <svg className={css['footer-top-about-icon']}>
                                    <use href="/icons.svg#icon-fb"></use>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link className={css['footer-top-about-social-link']} href="/">
                                <svg className={css['footer-top-about-icon']}>
                                    <use href="/icons.svg#icon-inst"></use>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link className={css['footer-top-about-social-link']} href="/">
                                <svg className={css['footer-top-about-icon']}>
                                        <use href="/icons.svg#icon-tiktok"></use>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <ul className={css['footer-top-links']}>
                        <li className={css['footer-top-links-item']}>
                                <p className={css['footer-top-links-item-title']}>Szybkie linki</p>
                                <ul className={css['footer-top-links-item-list']}>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Boksy Prezentowe</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">O Nas</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Dostawa i Płatność</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Kontakt</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Blog</Link></li>
                                </ul>
                        </li>
                        <li className={css['footer-top-links-item']}>
                                <p className={css['footer-top-links-item-title']}>Kategorie</p>
                                <ul className={css['footer-top-links-item-list']}>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Dla Niego</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Dla Niej</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Dla Dzieci</Link></li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <Link href="/">Dla Firm</Link></li>
                                </ul>
                        </li>
                        <li className={css['footer-top-links-item']}>
                                <p className={css['footer-top-links-item-title']}>Kontakt</p>
                                <p>Pon-Pt: 8:00-19:00<br/>(w okresie przedświątecznym dłużej)</p>
                                <ul className={css['footer-top-links-item-list']}>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <svg className={css['footer-top-links-icon']}>
                                            <use href="/icons.svg#icon-map"></use>
                                        </svg>
                                        <p>Ul. Jana Kazimierza 11a/4u <br/> 01-248 Warszawa</p>
                                    </li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <svg className={css['footer-top-links-icon']}>
                                            <use href="/icons.svg#icon-phone"></use>
                                        </svg>
                                        <a href="tel:+48736653527">+48 736 653 527</a>
                                    </li>
                                    <li className={css['footer-top-links-item-list-item']}>
                                        <svg className={css['footer-top-links-icon']}>
                                            <use href="/icons.svg#icon-mail"></use>
                                        </svg>
                                        <a href="mailto:candyboutique.manager@gmail.com">candyboutique.manager@gmail.com</a>
                                    </li>
                                </ul>
                        </li>
                    </ul>
            </div>
            <div className={css['footer-bottom']}>
                <p className={css['footer-bottom-text']}>© 2025 Słodki prezent. Wszelkie prawa zastrzeżone.</p>
                <ul className={css['footer-bottom-links']}>
                    <li><Link href="/regulamin">Regulamin</Link></li>
                    <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
                    <li><Link href="/cookies">Cookies</Link></li>
                </ul>
            </div>
          </div>
    </footer>
  )
}

export default Footer
