'use client';

import css from "./Ocassion.module.scss";
import Image from "next/image";

import { Holiday } from "@/src/redux/holidays/slice";

export interface HolidayProps {
  holiday: Holiday;
}


const Ocassion: React.FC<HolidayProps> = ({holiday}) =>  {
  return (
    <div className={css.card}>
        <Image
          priority
          className={css['card-icon']}
          src={holiday.photo}
          width="45"
          height="45"
          alt={holiday.name}
        />
        <h3 className={css['card-title']}>{holiday.name}</h3>
        <p className={css['card-description']}>{holiday.description}</p>
    </div>
  )
}

export default Ocassion
