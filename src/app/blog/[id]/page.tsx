'use client';

import css from './page.module.scss'
import BlogAside from '../../components/BlogAside/BlogAside'
import Skontaktuj from '../../components/Skontaktuj/Skontaktuj'
import Image from 'next/image'

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import { selectArticle, selectError, selectLoading } from '@/src/redux/blog/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from "../../../redux/hooks";

import { fetchArticles } from '../../../redux/blog/operations';

import Link from 'next/link';

const ArticlePage = () => {
    const path = usePathname();

    const dispatch = useAppDispatch();
    
        const pathname = usePathname();
    
        const articles = useSelector(selectArticle);
        const error = useSelector(selectError);
        const isLoading = useSelector(selectLoading);
    
        useEffect(() => {
            if (!articles || articles.length === 0) {
                dispatch(fetchArticles());
            }
        }, [dispatch, articles]);
    
        const articleId = pathname.split('/').pop();
        const article = articles.find(item => item._id?.toString() === articleId);
    
        if (isLoading || !article) {
            return <p>Ładowanie produktu...</p>;
        }
    
        if (error) {
            return <p>Błąd: {error}</p>;
        }


  return (
    <main className={css.article}>
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
                <Link href='/blog'>{article.category}</Link>
                </li>
                <span className={css.arrow}>&gt;</span>
                <li
                    className={
                        path === `/blog/${article._id}`
                            ? 'nav-active'
                            : 'nav-item'
                    }
                >
                {article.title}
                </li>
            </ul>
        </nav>
        <h1 className='main-title mb-24'>Nasz Blog</h1>
        <p className='sub-title w625 mb-40'>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
        <section className={css['article-content']}>
            <div className={css['article-left']}>
                <Image
                    priority
                    src={article.photo}
                    width="644"
                    height="430"
                    alt="Give a present"
                    className={css['article-left-img']}
                />
                <div className={css['article-left-content']}>
                    <div className={css['article-left-content-top']}>
                        <span className={css['article-left-content-top-wrapper']}>
                            <p>{article.category}</p>
                        </span>
                        <p className={css['article-left-content-top-date']}>{article.date}</p>
                        </div>
                    <p className="section-title mb-24">{article.title}</p>
                        <p className={css['article-left-content-text']}>{article.description}</p> <br/>
                        <p>{article.text}</p>
                </div>
            </div>
            <BlogAside/>
            
        </section>
        <Skontaktuj/>
    </main>
  )
}

export default ArticlePage
