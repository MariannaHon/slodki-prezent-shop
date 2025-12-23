'use client';

import css from "./Popular.module.scss";
import ProductCard from "../ProductCard/ProductCard";

import { Product } from '@/src/redux/products/slice';
import { useSelector } from 'react-redux';

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { useState } from "react";
import Link from "next/link";


const Popular = () => {

  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const [isClient] = useState(() => typeof window !== 'undefined');

  if (isLoading) {
      return <p>Page is loading</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!products) {
      return <p>No products found</p>;
  }

  

  return isClient ?(
    <div className="container">
      <div className={css.popular}>
        <h1 className="section-title mb-40">Najpopularniejsze zestawy</h1>
        {isClient ? (
          <>
            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                modules={[Navigation, Scrollbar, Keyboard, Mousewheel, Pagination]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                keyboard={{ enabled: true }}
                mousewheel={true}
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                className={css['popular-list']}
              >
                {products.map((product: Product) => (
                  <SwiperSlide className={css.item} key={product._id}>
                    <Link href={`/boksy/${product._id}`}>
                      <ProductCard product={product} />
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
          `}</style>
          </>
              
            ) : (
              <p>Loading Swiper...</p>
            )}
      </div>
    </div>
  ) : null;
}

export default Popular
