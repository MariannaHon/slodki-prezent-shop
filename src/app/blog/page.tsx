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

import { selectArticle, selectError, selectLoading } from '@/src/redux/blog/selectors';

import { Blog } from '@/src/redux/blog/slice'

const BlogPage = () => {

   const dispatch = useAppDispatch();
  
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);
  
  
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
    <div className={css.blog}>
      <div className='container'>
        <h1 className='main-title mb-16'>Nasz Blog</h1>
        <p className='sub-title mb-40'>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
        <ul className={css['blog-list']}>
          <li className={css['blog-list-item']}>Wszystkie (32)</li>
          <li className={css['blog-list-item']}>Okazje (6)</li>
          <li className={css['blog-list-item']}>Porady prezentowe (12)</li>
          <li className={css['blog-list-item']}>Przepisy i inspiracje (9)</li>
          <li className={css['blog-list-item']}>Zakulisowo (5)</li>
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
      </div>
    </div>
  )
}

export default BlogPage