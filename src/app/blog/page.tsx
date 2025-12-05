
import css from './page.module.scss'
import BlogCard from '../components/BlogCard/BlogCard'
import Link from 'next/link'
import Skontaktuj from '../components/Skontaktuj/Skontaktuj'
import PopularBlogCard from '../components/PopularBlogCard/PopularBlogCard'


const blogPage = () => {
  return (
    <div className={css.blog}>
      <div className='container'>
        <h1 className='main-title mb-16'>Nasz Blog</h1>
        <p className='sub-title mb-40'>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
        <ul className={css['blog-list']}>
          <li className={css['blog-list-item']}>Wszystkie (32)</li>
          <li className={css['blog-list-item']}>Okazje (6)</li>
          <li className={css['blog-list-item']}>Porady prezentowe (12)</li>
          <li className={css['blog-list-item']}>Przepisy i inspiracje (9)</li>
          <li className={css['blog-list-item']}>Zakulisowo (5)</li>
        </ul>
        <div className={css['blog-content']}>
          <div className={css['blog-content-cards']}>
            <BlogCard />
            <button className={css['blog-content-cards-btn']}>Zobacz więcej</button>
          </div>
          <div className={css['blog-content-right']}>
            <div className={css['blog-content-right-wrapper']}>
              <h4 className='blog-title'>Najpopularniejsze</h4>
              <ul className={css['blog-content-right-wrapper-list']}>
                <li>
                  <PopularBlogCard/>
                </li>
              </ul>
            </div>
            <div className={css['blog-content-right-follow']}>
              <h4 className='blog-title mb-24'>Śledź nas</h4>
              <ul className={css['blog-content-right-follow-list']}>
                <li>
                    <Link className={css['blog-content-right-follow-list-item']} href="/">
                        <svg className={css['blog-content-right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-fb"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['blog-content-right-follow-list-item']}>
                    <Link className={css['blog-content-right-follow-list-item']} href="/">
                        <svg className={css['blog-content-right-follow-list-item-icon']}>
                            <use href="/icons.svg#icon-inst"></use>
                        </svg>
                    </Link>
                </li>
                <li className={css['blog-content-right-follow-list-item']}>
                    <Link className={css['blog-content-right-follow-list-item']} href="/">
                        <svg className={css['blog-content-right-follow-list-item-icon']}>
                                <use href="/icons.svg#icon-tiktok"></use>
                        </svg>
                    </Link>
                </li>
            </ul>
            </div>
            <div className={css['blog-content-right-sign']}>
              <h4 className='blog-title'>Zapisz się do naszego newslettera</h4>
              <p className={css['blog-content-right-sign-text']}>Bądź na bieżąco z nowościami i wyjątkowymi ofertami.</p>
              <input className={css['blog-content-right-sign-input']} type="text" placeholder='Wpisz swój adres e-mail' />
              <button className={css['blog-content-right-sign-btn']} type='button'>Zapisz się</button>
            </div>
          </div>
        </div>
        
        <Skontaktuj/>
      </div>
    </div>
  )
}

export default blogPage