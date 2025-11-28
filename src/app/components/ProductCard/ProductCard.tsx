import css from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
        <div>
            <div>
                {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={css.card}>
                    <div className={css.image}></div>

                    <div className={css.cardContent}>
                    <h3>Produkt {i + 1}</h3>

                    <div className={css.priceRow}>
                        <span className={css.price}>123 zł</span>
                        <button className={css.cartBtn}>🛒</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className={css.pagination}>
            <button className={css.pageBtn}>1</button>
            <button className={css.pageBtn}>2</button>
            <button className={css.pageBtn}>3</button>
            <button className={css.pageBtn}>4</button>
            <button className={css.pageBtn}>5</button>
            <button className={css.pageBtn}>6</button>
            </div>
        </div>
  )
}

export default ProductCard
