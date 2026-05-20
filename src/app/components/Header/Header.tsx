import Link from 'next/link';
import css from './Header.module.scss';

import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css['header-content']}>
          <Link href="/"><svg className={css['header-logo']}
            width="213"
            height="48"
        >
            <use href="/icons.svg#icon-logo"></use>
          </svg></Link>
          
          <nav className={css['header-nav']}>
              <ul className={css['header-nav-list']}>
                  <li>
                    <Link className={css['header-nav-list-link']} href="/boksy">Boksy Prezentowe</Link>
                  </li>
                  <li>
                    <Link className={css['header-nav-list-link']} href="/about">O Nas</Link>
                  </li>
                  <li>
                    <Link className={css['header-nav-list-link']} href="/dostawa">Dostawa i Płatność</Link>
                  </li>
                  <li>
                    <Link className={css['header-nav-list-link']} href="/kontakt">Kontakt</Link>
                  </li>
                  <li>
                    <Link className={css['header-nav-list-link']} href="/blog">Blog</Link>
                  </li>
              </ul>
              <ul className={css['header-nav-search']}>
                  <li>
                      <Search />
                </li>
              <li>
                <Link href='/cart'>
                  <svg
                    width="24"
                    height="24"
                    >
                      <use href="/icons.svg#icon-cart"></use>
                  </svg>
                </Link>
                        
                </li>
              </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
