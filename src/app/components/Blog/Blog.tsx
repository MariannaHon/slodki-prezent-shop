"use client";

import BlogCard from '../BlogCard/BlogCard'
import css from './Blog.module.scss'

import { Blog } from '@/src/redux/blog/slice';
import { useSelector } from 'react-redux';

import { selectArticle, selectError, selectLoading } from '@/src/redux/blog/selectors';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { useState } from "react";
import Link from 'next/link';


const BlogPage = () => {

  const articles = useSelector(selectArticle);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

    const [isBlog] = useState(() => typeof window !== 'undefined');

  if (isLoading) {
      return <p>Page is loading</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!articles) {
      return <p>No articles found</p>;
  }



  return isBlog ?(
    <div className={css.blog}>
          <div className="container">
              <h2 className="section-title">Nasz Blog</h2>
              <p className={css['blog-text']}>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
              {isBlog ? (
          <>
            <Swiper
                slidesPerView={3}
                spaceBetween={24}
                modules={[Navigation, Scrollbar, Keyboard, Mousewheel, Pagination]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                keyboard={{ enabled: true }}
                mousewheel={true}
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                className={css['blog-list']}
              >
                {articles.map((blog: Blog) =>  (
                  <SwiperSlide className={css['blog-list-item']} key={blog._id}>
                    <Link href={`/blog/${blog._id}`}>
                        <BlogCard blog={blog} />
                    </Link>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
            <style jsx global>{`
              .swiper-pagination-bullet {
                  border-radius: 100%;
                  width: 1rem;
                  height: 1rem;
                  background: #dac6be;
                  opacity: 1;
                  margin: 6rem 0.4rem;
              }
              .swiper-pagination-bullet-active {
                  background-color: #734F41;
                  opacity: 1;
              }
              .swiper-button-next, .swiper-button-prev {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                width: 4.8rem;
                height: 4.8rem;
                backdrop-filter: blur(6px);
                background-color: ;
                padding: 1rem;
              }

              .swiper-button-next::after,
              .swiper-button-prev::after {
                color: #523b32ff;   
                font-size: 2.5rem;
                background-color: #523b32ff;
                }
          `}</style>
          </>) : (
              <p>Loading Swiper...</p>
            )}
        </div>
    </div>
  ) : null;
}

export default BlogPage