
'use client';

import css from "./page.module.scss";
import Filters from "../components/Filters/Filters";
// import ProductCard from "../components/ProductCard/ProductCard";
// import RecommendCard from "../components/RecommendCard/RecommendCard";

import { useEffect } from 'react';
import { useAppDispatch } from "../../redux/hooks";

import { fetchProducts } from '../../redux/products/operations';
import Recommendations from "../components/Recommendations/Recommendations";


export default function BoksyPage() {

    const dispatch = useAppDispatch();
    
      useEffect(() => {
          dispatch(fetchProducts());
      }, [dispatch]);


    return (
        <div className="container">
            <div className={css.boksy}>
                <div className={css['boksy-top']}>
                    <h1 className='main-title mb-16'>Odkryj Nasze Prezenty</h1>
                    <p className={css['boksy-top-paragraph']}>
                        Odkryj naszą ekskluzywną kolekcję prezentów premium, idealnych dla
                        klientów biznesowych i wyjątkowych okazji
                    </p>
                </div>

                <div className={css['boksy-layout']}>
                    <Filters />
                    <Recommendations/>
                    {/* <RecommendCard/> */}
                    {/* <ProductCard /> */}
                </div>
                <div className={css['boksy-bottom']}>
                    <div>
                        <h3 className={css['boksy-bottom-title']}>Boksy prezentowe w świecie biznesu</h3>
                        <p className={css['boksy-bottom-tekst']}>
                                W świecie biznesu relacje międzyludzkie odgrywają kluczową rolę, dlatego tak ważne jest ich pielęgnowanie. Boksy upominkowe to doskonały sposób na okazanie wdzięczności i budowanie długofalowych relacji. Świetnie sprawdzają się przy okazji Świąt Bożego Narodzenia, Wielkanocy, jako forma podziękowania dla klienta lub kontrahenta, a także jako sposób na docenienie pracowników. <br/><br/>
    Nasza firma specjalizuje się w zestawach prezentowych i od wielu lat oferuje wysokiej jakości boksy prezentowe, które należą do najbardziej eleganckich i uniwersalnych form upominku. Oferta jest szeroka, zróżnicowana cenowo, co pozwala dobrać odpowiedni zestaw do dostępnego budżetu.
                        </p>
                    </div>

                    <div>
                        <p className={css['boksy-bottom-tekst']}>Nasze boksy mają nowoczesną, estetyczną formę — to stylowe pudełka o różnych kształtach, wielkościach i kolorystyce. W ich wnętrzu znajdują się produkty najwyższej jakości: zarówno ekskluzywne, importowane delikatesy, jak i wyroby z polskich manufaktur. Wśród nich można znaleźć bogaty wybór słodkości: czekoladki, praliny, bombonierki, cukierki, marcepany, bakalie, ciasteczka cynamonowe oraz ręcznie zdobione pierniczki</p><br/><br/>
                        <h3 className={css['boksy-bottom-title']}>Hurtownia boksów prezentowych</h3>
                        <p className={css['boksy-bottom-tekst']}>
                            Zapraszamy do zapoznania się z naszą ofertą hurtową, skierowaną głównie do klientów B2B. Realizujemy zamówienia na duże ilości boksów upominkowych, gwarantując sprawną obsługę, indywidualne podejście oraz terminową dostawę – nawet dla bardzo dużych firm i korporacji.
                        </p>
                    </div>
                </div>
        </div>
    </div>

  );
};
