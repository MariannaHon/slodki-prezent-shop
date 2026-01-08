
import Image from "next/image"
import css from './PopularBlogCard.module.scss'

import { Blog } from "@/src/redux/blog/slice";

export interface BlogProps {
  blog: Blog;
}

const PopularBlogCard: React.FC<BlogProps> = ({blog}) => {
  return (
    <div className={css.card}>
        <Image
            priority
            className={css['card-img']}
            src={blog.photo}
            width="83"
            height="86"
            alt="People creating sweet presents"
        />
        <div className={css['card-content']}>
            <h4 className={css['card-content-title']}>{blog.title}</h4>
            <div className={css['card-content-bottom']}>
                <p className={css['card-content-bottom-all']}>Wszystkie</p>
                <p>{blog.date}</p>
            </div>              
        </div>
    </div>
  )
}

export default PopularBlogCard
