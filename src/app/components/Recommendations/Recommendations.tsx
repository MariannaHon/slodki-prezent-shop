'use client'

import css from './Recommendations.module.scss';
import RecommendCard from '../RecommendCard/RecommendCard';

const Recommendations = () => {
  return (
    <div className={css.recommend}>
        <div className="container">
            <h2 className="section-title">Nasze Rekomendacje</h2>
            <p className={css['recommend-text']}>Wybierz kategorię produktów dopasowaną do Twoich potrzeb</p>
            <RecommendCard />
            <button className={css['recommend-btn']} type="button">Zobacz więcej</button>
        </div>
    </div>
  )
}

export default Recommendations
