'use client';

import css from "./Popular.module.scss";
import PopularCard from "../PopularCard/PopularCard";

const Popular = () => {
  return (
    <div className="container">
          <div className={css.popular}>
              <h1 className="section-title mb-40">Najpopularniejsze zestawy</h1>
              <PopularCard />
        </div>
    </div>
  )
}

export default Popular
