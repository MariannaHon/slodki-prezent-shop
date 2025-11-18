import Link from 'next/link';
import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={css.header}>
        <svg className={css['header-logo']}
            width="213"
            height="48"
        >
            <use href="/icons.svg#icon-logo"></use>
          </svg>
          <nav className={css['header-nav']}>
              <ul className={css['header-nav-list']}>
                  <li className={css['header-nav-list-item']}>
                    <Link className={css['header-nav-list-link']} href="/">Boksy Prezentowe</Link>
                  </li>
                  <li className={css['header-nav-list-item']}>
                    <Link className={css['header-nav-list-link']} href="/">O Nas</Link>
                  </li>
                  <li className={css['header-nav-list-item']}>
                    <Link className={css['header-nav-list-link']} href="/">Dostawa i Płatność</Link>
                  </li>
                  <li className={css['header-nav-list-item']}>
                    <Link className={css['header-nav-list-link']} href="/">Kontakt</Link>
                  </li>
                  <li className={css['header-nav-list-item']}>
                    <Link className={css['header-nav-list-link']} href="/">Blog</Link>
                  </li>
              </ul>
              <ul className={css['header-nav-search']}>
                  <li>
                      <div className={css.box}>
                          <input className={css['header-nav-search-input']} type="text" placeholder='Szukaj...' />
                          <svg className={css.icon}
                            width="24"
                            height="24"
                            >
                                <use href="/icons.svg#icon-search"></use>
                            </svg>
                      </div>
                </li>
                  <li>
                        <svg
                        width="24"
                        height="24"
                        >
                            <use href="/icons.svg#icon-cart"></use>
                        </svg>
                </li>
              </ul>
          </nav>
    </header>
  )
}

export default Header
