'use client';

import Image from "next/image";
import css from "./Clients.module.scss";

const Clients = () => {
  return (
    <div className={css.clients}>
        <div className="container">
            <h2 className="section-title">Prezenty, które doceniły topowe firmy</h2>
            <ul className={css['clients-list']}>
                <li>
                    <Image
                        priority
                        src="/images/cola.png"
                        width="140"
                        height="140"
                        alt="Cola"
                    />
                </li>
                <li>
                    <Image
                        priority
                        src="/images/bmw.png"
                        width="140"
                        height="140"
                        alt="BMW"
                    />
                </li>
                <li>
                    <Image
                        priority
                        src="/images/mcdonald.png"
                        width="140"
                        height="140"
                        alt="McDonalds"
                    />
                </li>
                <li>
                    <Image
                        priority
                        src="/images/zara.png"
                        width="140"
                        height="140"
                        alt="Zara"
                    />
                </li>
                <li>
                    <Image
                        priority
                        src="/images/nike.png"
                        width="140"
                        height="140"
                        alt="Nike"
                    />
                </li>
                <li>
                    <Image
                        priority
                        src="/images/audi.png"
                        width="140"
                        height="140"
                        alt="Audi"
                    />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Clients
