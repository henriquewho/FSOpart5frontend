import React from 'react'
const Blog = ({blog}) => (
  <div className='blog-entry'>
    {blog.title} - from {blog.author}
  </div>  
)

export default Blog