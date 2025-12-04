
import css from './page.module.scss'
import BlogCard from '../components/BlogCard/BlogCard'
import Link from 'next/link'
import Skontaktuj from '../components/Skontaktuj/Skontaktuj'
import PopularBlogCard from '../components/PopularBlogCard/PopularBlogCard'


const blogPage = () => {
  return (
    <div className={css.blog}>
      <div className='container'>
        <h1>Nasz Blog</h1>
        <p>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
        <ul>
          <li>Wszystkie (32)</li>
          <li>Okazje (6)</li>
          <li>Porady prezentowe (12)</li>
          <li>Przepisy i inspiracje (9)</li>
          <li>Zakulisowo (5)</li>
        </ul>
        <div>
          <div>
            <BlogCard/>
          </div>
          <div>
            <div>
              <h4>Najpopularniejsze</h4>
              <ul>
                <li>
                  <PopularBlogCard/>
                </li>
              </ul>
            </div>
            <div>
              <h4>Śledź nas</h4>
              <ul className={css['contact-bottom-list']}>
                <li>
                    <Link className={css['contact-bottom-list-link']} href="/">
                        <svg className={css['contact-bottom-list-link-icon']}>
                            <use href="/icons.svg#icon-fb"></use>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className={css['contact-bottom-list-link']} href="/">
                        <svg className={css['contact-bottom-list-link-icon']}>
                            <use href="/icons.svg#icon-inst"></use>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className={css['contact-bottom-list-link']} href="/">
                        <svg className={css['contact-bottom-list-link-icon']}>
                                <use href="/icons.svg#icon-tiktok"></use>
                        </svg>
                    </Link>
                </li>
            </ul>
            </div>
            <div>
              <h4>Zapisz się do naszego newslettera</h4>
              <p>Bądź na bieżąco z nowościami i wyjątkowymi ofertami.</p>
              <input type="text" placeholder='Wpisz swój adres e-mail' />
              <button type='button'>Zapisz się</button>
            </div>
          </div>
        </div>
        <button>Zobacz więcej</button>
        <Skontaktuj/>
      </div>
    </div>
  )
}

export default blogPage