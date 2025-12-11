'use client';

import Ocassion from '../Ocassion/Ocassion';
import css from './Holidays.module.scss';

import { Holiday } from '@/src/redux/holidays/slice';
import { useSelector } from 'react-redux';

import { selectHolidays, selectError, selectLoading } from '@/src/redux/holidays/selectors';

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
        <ul className={css['recommend-list']}>{holidays.map((holiday: Holiday) => (
              <li key={holiday._id}>
                  <Ocassion holiday={holiday} />
              </li>
          ))}
        </ul>
      </div>
        
    </div>
  )
}

export default Holidays
