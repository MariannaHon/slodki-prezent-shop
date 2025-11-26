import Image from "next/image"
import Link from "next/link"
import css from './BlogCard.module.scss'

const BlogCard = () => {
  return (
    <div className={css.card}>
        <Image
            priority
            src="/images/gift.png"
            width="384"
            height="224"
            alt="Give a present"
          />
          <div>
              <div>
                  <p>Wszystkie</p>
                  <p>12 Maja 2023</p>
              </div>
              <p>Jak wybrać idealny prezent dla klienta biznesowego?</p>
              <p>Poznaj 5 sprawdzonych zasad wybierania prezentów, które wzmocnią relacje biznesowe i zostawią niezapomniane wrażenie.</p>
              <Link href='/'>Czytaj więcej</Link>
          </div>
    </div>
  )
}

export default BlogCard
