'use client';

import css from './BlogAside.module.scss'
import Link from 'next/link';
import PopularBlogCard from '../PopularBlogCard/PopularBlogCard';

import { Blog } from '@/src/redux/blog/slice';
import { useSelector } from 'react-redux';

import { selectArticle, selectError, selectLoading } from '@/src/redux/blog/selectors';


const BlogAside = () => {

  const articles = useSelector(selectArticle);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
      return <p>Page is loading</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!articles) {
      return <p>No articles found</p>;
  }

  return (
    <aside className={css.right}>
          <section className={css['right-wrapper']}>
            <h4 className='blog-title mb-24'>Najpopularniejsze</h4>
            <ul className={css['right-wrapper-list']}>{articles.slice(0, 3).map((article: Blog) => (
              <li key={article._id}>
                  <Link href={`/blog/${article._id}`}>
                      <PopularBlogCard blog={article} />
                  </Link>
              </li>
            ))}
            </ul>
          </section>
          <section className={css['right-follow']}>
              <h4 className='blog-title mb-24'>Śledź nas</h4>
              <ul className={css['right-follow-list']}>
                <li>
                    <Link className={css['right-follow-list-item']} href="https://www.facebook.com/people/Slodki-Prezent/61582330476976/" target="_blank">
                        <svg className={css['right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-fb"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['right-follow-list-item']}>
                    <Link className={css['right-follow-list-item']} href="https://www.instagram.com/slodkiprezentpl/" target="_blank">
                        <svg className={css['right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-inst"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['right-follow-list-item']}>
                    <Link className={css['right-follow-list-item']} href="https://www.tiktok.com/@slodkiprezent.pl?_t=ZN-8zyhQUgNubO&_r=1" target="_blank">
                        <svg className={css['right-follow-list-item-icon']}>
                                <use href="/icons.svg#icon-tiktok"></use>
                        </svg>
                    </Link>
                </li>
            </ul>
            </section>
            <section className={css['right-sign']}>
              <h4 className='blog-title'>Zapisz się do naszego newslettera</h4>
              <p className={css['right-sign-text']}>Bądź na bieżąco z nowościami i wyjątkowymi ofertami.</p>
              <input className={css['right-sign-input']} type="text" placeholder='Wpisz swój adres e-mail' />
              <button className={css['right-sign-btn']} type='button'>Zapisz się</button>
            </section>
          </aside>
  )
}

export default BlogAside
