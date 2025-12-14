'use client';

import Image from "next/image";
import css from "./Clients.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const clients = [
  { src: '/images/cola.png', alt: 'Cola' },
  { src: '/images/bmw.png', alt: 'BMW' },
  { src: '/images/mcdonald.png', alt: 'McDonalds' },
  { src: '/images/zara.png', alt: 'Zara' },
  { src: '/images/nike.png', alt: 'Nike' },
  { src: '/images/audi.svg', alt: 'Audi' },
];


const Clients = () => {
  return (
    <div className="container">
        <div className={css.clients}>
            <h2 className="section-title">Prezenty, które doceniły topowe firmy</h2>
            <>
                <Swiper
                    slidesPerView={4}
                    modules={[Scrollbar, Keyboard, Mousewheel, Pagination]}
                    keyboard={{ enabled: true }}
                    mousewheel={true}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    className={css['clients-list']}
                >
                    {clients.map(({ src, alt }) => (
                        <SwiperSlide className={css.item} key={alt}>
                            <Image
                                priority
                                src={src}
                                width={140}
                                height={140}
                                alt={alt}
                            />
                        </SwiperSlide>
                    ))}
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
                `}</style>
            </>
        </div>
    </div>
  )
}

export default Clients
