import BlogCard from "../BlogCard/BlogCard"
import css from './Blog.module.css'


const Blog = () => {
  return (
    <div>
          <div className="container">
              <h2>Nasz Blog</h2>
              <p>Odkryj najnowsze trendy w świecie prezentów korporacyjnych i dowiedz się, jak budować relacje biznesowe poprzez przemyślane upominki.</p>
              <BlogCard />
        </div>
    </div>
  )
}

export default Blog
