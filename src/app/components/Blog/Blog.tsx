import BlogCard from '../BlogCard/BlogCard'
import css from './Blog.module.scss'


const blogPage = () => {
  return (
    <div className={css.blog}>
          <div className="container">
              <h2 className="section-title">Nasz Blog</h2>
              <p className={css['blog-text']}>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
              <BlogCard />
        </div>
    </div>
  )
}

export default blogPage