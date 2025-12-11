"use client";

import BlogCard from '../BlogCard/BlogCard'
import css from './Blog.module.scss'

import { Blog } from '@/src/redux/blog/slice';
import { useSelector } from 'react-redux';

import { selectArticle, selectError, selectLoading } from '@/src/redux/blog/selectors';



const blogPage = () => {

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
          <div className="container">
              <h2 className="section-title">Nasz Blog</h2>
              <p className={css['blog-text']}>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
              <ul className={css['recommend-list']}>{articles.map((blog: Blog) => (
              <li key={blog._id}>
                  <BlogCard blog={blog} />
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default blogPage