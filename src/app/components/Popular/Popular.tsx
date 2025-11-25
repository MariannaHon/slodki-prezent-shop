'use client';

import css from "./Popular.module.scss";
import PopularCard from "../PopularCard/PopularCard";

const Popular = () => {
  return (
    <div>
          <div>
              <h1>Najpopularniejsze zestawy</h1>
              <PopularCard />
        </div>
    </div>
  )
}

export default Popular
