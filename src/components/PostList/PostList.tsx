import React from 'react'
import { BlogPost } from '../../data/@types/BologoPostInterface'
import styles from './PostList.module.css'
import Link from 'next/Link'

function PostList({ posts }: { posts: BlogPost[] }) {
    return (
        <ul className={styles['post-list']}>
            {posts.map((post) => (<PostListItem key={post.id} post={post} />))}
        </ul>
    )
}

export default PostList

export function PostListItem({ post }: { post: BlogPost }) {

    return (
        <>
            <li className={styles['post-list-item']}>
                <Link href={`posts/${post.slug}`}>
                    <a>

                        <img className={styles['post-picture']} src={post.picture} alt={post.title} />
                        <h2 className={styles['post-title']}>{post.title}</h2>
                        <p>{post.description}</p>
                    </a>
                </Link>

            </li>

        </>
    )
}