'use client';

import Ocassion from '../Ocassion/Ocassion';
import css from './Holidays.module.scss';

import { Holiday } from '@/src/redux/holidays/slice';
import { useSelector } from 'react-redux';

import { selectHolidays, selectError, selectLoading } from '@/src/redux/holidays/selectors';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Holidays = () => {

  const holidays = useSelector(selectHolidays);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
      return <p>Page is loading</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!holidays) {
      return <p>No holidays found</p>;
  }


  return (
    <div>
      <div className='container'>
        <>
          <Swiper
              slidesPerView={4}
              modules={[Scrollbar, Keyboard, Mousewheel, Pagination]}
              keyboard={{ enabled: true }}
              mousewheel={true}
              scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
              className={css.holidays}
          >
              {holidays.map((holiday: Holiday) => (
                <SwiperSlide className={css.item} key={holiday._id}>
                  <Ocassion holiday={holiday} />
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

export default Holidays
