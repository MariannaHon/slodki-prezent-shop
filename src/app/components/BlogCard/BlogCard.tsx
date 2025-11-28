import Image from "next/image"
import Link from "next/link"
import css from './BlogCard.module.scss'

const BlogCard = () => {
  return (
    <div className={css.card}>
        <Image
            priority
            className={css['card-image']}
            src="/images/gift.png"
            width="384"
            height="224"
            alt="Give a present"
          />
          <div className={css['card-content']}>
              <div className={css['card-content-top']}>
                  <p className={css['card-content-top-tag']}>Wszystkie</p>
                  <p className={css['card-content-top-date']}>12 Maja 2023</p>
              </div>
              <p className="card-title">Jak wybrać idealny prezent dla klienta biznesowego?</p>
              <p className={css['card-content-text']}>Poznaj 5 sprawdzonych zasad wybierania prezentów, które wzmocnią relacje biznesowe i zostawią niezapomniane wrażenie.</p>
              <Link className={css['card-content-btn']} href='/'>Czytaj więcej</Link>
          </div>
    </div>
  )
}

export default BlogCard
