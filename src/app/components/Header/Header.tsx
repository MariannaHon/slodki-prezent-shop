'use client';

import Link from 'next/link';
import css from './Header.module.scss';

import Search from '../Search/Search';

import { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css['header-content']}>          
          <nav className={css['header-nav']}>
            <Link href="/"><svg className={css['header-logo']}
              width="213"
              height="48"
          >
              <use href="/icons.svg#icon-logo"></use>
            </svg></Link>
              <ul className={`${css['header-nav-list']} ${
                              isMenuOpen ? '' : 'hidden'
                            }`}>
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
                <li className='hidden'>
                  <Search />
                </li>
                <li>
                  <button type='button' className={css['header-nav-btn']}>
                  <svg
                    className={`${css['search']} ${isMenuOpen ? 'hidden' : ''}`}
                      width="24"
                      height="24"
                      >
                        <use href="/icons.svg#icon-search"></use>
                    </svg>
                  </button>
                </li>
                <li>
                  <Link href='/cart' className={`${css['header-nav-btn']} ${isMenuOpen ? 'hidden' : ''}`}>
                    <svg
                      width="24"
                      height="24"
                      >
                        <use href="/icons.svg#icon-cart"></use>
                    </svg>
                  </Link>    
                </li>
                <li>
                  <button type='button' className={`${css['header-nav-btn']} ${isMenuOpen ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(true)}>
                    <svg
                      width="24"
                      height="24"
                      >
                        <use href="/icons.svg#icon-burger"></use>
                    </svg>
                  </button>
                </li>
            </ul>
            <button type="button" className={css['close']}>
                <svg width="36" height="36" className={`${css.close} ${isMenuOpen ? '' : 'hidden'}`}
                onClick={() => setIsMenuOpen(false)}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
