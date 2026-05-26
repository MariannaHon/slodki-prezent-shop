'use client'

import css from './page.module.scss'
import BlogCard from '../components/BlogCard/BlogCard'
import Link from 'next/link'
import Skontaktuj from '../components/Skontaktuj/Skontaktuj'
import BlogAside from '../components/BlogAside/BlogAside'

import { useEffect } from 'react';
import { useAppDispatch } from "../../redux/hooks";

import { fetchArticles } from '@/src/redux/blog/operations';

import { useSelector } from 'react-redux';

import { selectError, selectLoading, selectFilteredArticles, selectFilter, selectArticle } from '@/src/redux/blog/selectors';

import { changeFilter } from '@/src/redux/blog/slice';

import { Blog } from '@/src/redux/blog/slice'

import { usePathname } from 'next/navigation';

const BlogPage = () => {
  const path = usePathname();

   const dispatch = useAppDispatch();
  
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);
  
  
  const articles = useSelector(selectFilteredArticles);
  const allArticles = useSelector(selectArticle);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const activeFilter = useSelector(selectFilter);
  
    if (isLoading) {
        return <p>Page is loading</p>;
    }
  
    if (error) {
        return <p>Error: {error}</p>;
    }
  
    if (!articles) {
        return <p>No articles found</p>;
  }
  
  const getCount = (type: string) => {

    if (type === 'all') {
        return allArticles.length;
    }

    return allArticles.filter(article =>
        article.type.includes(type)
    ).length;
  };

  return (
    <main className={css.blog}>
      <section className='container'>
        <nav>
          <ul className='nav'>
            <li
                className={
                    path === '/' ? 'nav-active' : 'nav-item'
                }
            >
                <Link href="/">Strona główna</Link>
            </li>
            <span className={css.arrow}>&gt;</span>
            <li
                className={
                    path === '/blog'
                        ? 'nav-active'
                        : 'nav-item'
                }
            >
            Blog
            </li>
          </ul>
        </nav>
        <h1 className='main-title mb-16'>Nasz Blog</h1>
        <p className='sub-title mb-40'>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
        <ul className={css['blog-list']}>
          <li className={`${css['blog-list-item']}
                          ${activeFilter === 'all' ? css.active : ''}
                        `}>
            <button className={css['blog-list-item-btn']} onClick={() => dispatch(changeFilter('all'))}>
              Wszystkie ({getCount('all')})
            </button>
          </li>
          <li className={`${css['blog-list-item']}
                          ${activeFilter === 'events' ? css.active : ''}
                        `}>
            <button className={css['blog-list-item-btn']} onClick={() => dispatch(changeFilter('events'))}>
              Okazje ({getCount('events')})
            </button>
          </li>
          <li className={`${css['blog-list-item']}
                          ${activeFilter === 'advices' ? css.active : ''}
                        `}>
            <button className={css['blog-list-item-btn']} onClick={() => dispatch(changeFilter('advices'))}>
              Porady prezentowe ({getCount('advices')})
            </button>
          </li>
          <li className={`${css['blog-list-item']}
                          ${activeFilter === 'inspirations' ? css.active : ''}
                        `}>
            <button className={css['blog-list-item-btn']} onClick={() => dispatch(changeFilter('inspirations'))}>
              Przepisy i inspiracje ({getCount('inspirations')})
            </button>
          </li>
          <li className={`${css['blog-list-item']}
                          ${activeFilter === 'insites' ? css.active : ''}
                        `}>
            <button className={css['blog-list-item-btn']} onClick={() => dispatch(changeFilter('insites'))}>
              Zakulisowo ({getCount('insites')})
            </button>
          </li>
        </ul>
        <div className={css['blog-content']}>
          <div className={css['blog-content-cards']}>
            <ul className={css['blog-content-cards-list']}>{articles.map((blog: Blog) => (
              <li className={css['blog-content-cards-list-item']} key={blog._id}>
                <Link href={`/blog/${blog._id}`}>
                  <BlogCard blog={blog} />
                </Link>
              </li>
              ))}
            </ul>
            <button className={css['blog-content-cards-btn']}>Zobacz więcej</button>
          </div>
          <BlogAside/>
        </div>
        
        <Skontaktuj/>
      </section>
    </main>
  )
}

export default BlogPage