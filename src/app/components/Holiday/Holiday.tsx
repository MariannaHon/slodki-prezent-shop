
import css from "./Holiday.module.scss";

const Holiday = () => {
  return (
    <div className={css.card}>
        <svg className={css['card-icon']}>
            <use href="/icons.svg#icon-halloween"></use>
          </svg>
          <h3 className={css['card-title']}>Klienci</h3>
          <p className={css['card-description']}>Zestawy dla ważnych klientów i partnerów biznesowych</p>
    </div>
  )
}

export default Holiday
