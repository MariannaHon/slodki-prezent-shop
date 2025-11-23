import Image from "next/image";
import css from "./page.module.scss";
import Holidays from "./components/Holidays/Holidays";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className={css.hero}>
          <div className={css["hero-left"]}>
            <h1 className='main-title mb-24'>Ekskluzywne Boksy Prezentowe dla Firm</h1>
            <p className="sub-title mb-40">Spersonalizowane zestawy słodyczy i alkoholi premium dla Twoich klientów i partnerów biznesowych</p>
            <div>
              <button className={css["hero-left-btn-brown"]}>Zamów Teraz</button>
              <button className={css["hero-left-btn-white"]}>Zobacz Katalog</button>
            </div>
          </div>
          <Image
                priority
                src="/images/hero.png"
                width="532"
                height="542"
                alt="Sweet present"
          />

        </div>
        <Holidays />
      </div>
    </main>
  );
}
