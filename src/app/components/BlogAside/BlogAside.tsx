'use client';

import css from './BlogAside.module.scss'
import Link from 'next/link';
import PopularBlogCard from '../PopularBlogCard/PopularBlogCard';



const BlogAside = () => {
  return (
    <div className={css.right}>
            <div className={css['right-wrapper']}>
              <h4 className='blog-title'>Najpopularniejsze</h4>
              <ul className={css['right-wrapper-list']}>
                <li>
                  <PopularBlogCard/>
                </li>
              </ul>
            </div>
            <div className={css['right-follow']}>
              <h4 className='blog-title mb-24'>Śledź nas</h4>
              <ul className={css['right-follow-list']}>
                <li>
                    <Link className={css['right-follow-list-item']} href="/">
                        <svg className={css['right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-fb"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['right-follow-list-item']}>
                    <Link className={css['right-follow-list-item']} href="/">
                        <svg className={css['right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-inst"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['right-follow-list-item']}>
                    <Link className={css['right-follow-list-item']} href="/">
                        <svg className={css['right-follow-list-item-icon']}>
                                <use href="/icons.svg#icon-tiktok"></use>
                        </svg>
                    </Link>
                </li>
            </ul>
            </div>
            <div className={css['right-sign']}>
              <h4 className='blog-title'>Zapisz się do naszego newslettera</h4>
              <p className={css['right-sign-text']}>Bądź na bieżąco z nowościami i wyjątkowymi ofertami.</p>
              <input className={css['right-sign-input']} type="text" placeholder='Wpisz swój adres e-mail' />
              <button className={css['right-sign-btn']} type='button'>Zapisz się</button>
            </div>
          </div>
  )
}

export default BlogAside
