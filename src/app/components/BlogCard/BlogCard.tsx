'use client';

import Image from "next/image"
import Link from "next/link"
import css from './BlogCard.module.scss'

import { Blog } from "@/src/redux/blog/slice";

export interface BlogProps {
  blog: Blog;
}


const BlogCard: React.FC<BlogProps> = ({ blog }) => {

  return (
    <div className={css.card}>
        <Image
            priority
            className={css['card-image']}
            src={blog.photo}
            width="320"
            height="224"
            alt="Give a present"
          />
          <div className={css['card-content']}>
            <div className={css['card-content-top']}>
              <span className={css['card-content-top-wrapper']}>
                <p>{blog.category}</p>
              </span>
              <p className={css['card-content-top-date']}>{blog.date}</p>
            </div>
            <p className="card-title">{blog.title}</p>
            <p className={css['card-content-text']}>{blog.description}</p>
            <Link className={css['card-content-btn']} href={`/blog/${blog._id}`}>Czytaj więcej</Link>
          </div>
    </div>
  )
}

export default BlogCard
