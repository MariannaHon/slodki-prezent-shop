'use client';
import Image from "next/image";
import css from "./ProductCard.module.scss";
import { ProductProps } from "../RecommendCard/RecommendCard";

const ProductCard: React.FC<ProductProps> = ({product}) =>  {
  return (
        <div className={css.card}>
            <Image
            priority
            className={css['card-img']}
                src={product.photo}
                width="382"
                height="350"
                alt="Sweet present"
            />
            <div className={css['card-content']}>
                <h3 className="card-title">{product.name}</h3>
                <p className={css['card-content-text']}>{product.description}</p>
                <div className={css['card-content-buy']}>
                    <p className={css['card-content-buy-price']}>{product.price} <span className={css['card-content-buy-price-netto']}>netto</span></p>
                    <button className={css['card-content-buy-btn']} type="button">Do Koszyka</button>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
