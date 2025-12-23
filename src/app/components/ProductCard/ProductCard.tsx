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
                width="276"
                height="345"
                alt="Sweet present"
            />
            <div className={css['card-content']}>
                <h3 className="card-title">{product.name}</h3>
                <div className={css['card-content-buy']}>
                    <div className={css['card-content-buy-wrapper']}>
                        <p className={css['card-content-buy-wrapper-price']}>{product.price} zł</p>
                        <p className={css['card-content-buy-wrapper-price-old']}>{product.oldPrice} zł</p>
                    </div>
                    <button className={css['card-content-buy-btn']} type="button">
                        <svg className={css['card-content-buy-btn-icon']}>
                            <use href="/icons.svg#icon-cart"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
