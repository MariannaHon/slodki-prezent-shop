
import Image from "next/image"
import css from './PopularBlogCard.module.scss'

const PopularBlogCard = () => {
  return (
    <div className={css.card}>
        <Image
            priority
            className={css['card-img']}
            src="/images/gift.png"
            width="83"
            height="86"
            alt="People creating sweet presents"
        />
        <div className={css['card-content']}>
            <h4 className={css['card-content-title']}>Jak wybrać idealny prezent dla klienta biznesowego?</h4>
            <div className={css['card-content-bottom']}>
                <p className={css['card-content-bottom-all']}>Wszystkie</p>
                <p>12 Maja 2023</p>
            </div>              
        </div>
    </div>
  )
}

export default PopularBlogCard
