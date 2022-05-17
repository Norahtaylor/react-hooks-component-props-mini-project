import React from 'react'
import Article from './Article'
import blogData from '../data/blog'


function ArticleList({ posts }) {
    const articlePosts = posts.map((blog) => (
        <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} minutes={blog.minutes} />
    ))
   
  return (
    <div>
    <main>
        {articlePosts}
    </main>

    </div>
  )
}

export default ArticleList