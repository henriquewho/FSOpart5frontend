import React, {useState} from 'react'


const Blog = ({blog, handleLike}) => {
  const [open, setOpen] = useState(false); 

  const controlOpen = () => {
    //console.log(blog);
    setOpen(!open);
  }

  return (
  <div className='blog-entry'>
    {blog.title}
    <button onClick={controlOpen} className='view-blog-button'>{open ? 'Hide' : 'View'}</button>

    <div style={{display: open ? '' : 'none'}}>
      <p>Author: {blog.author}</p>
      <p>Url: {blog.url}</p>
      <p>Likes: {blog.likes} <button onClick={()=>handleLike(blog)}>like</button></p>
    </div>

  </div>  
  )
}

export default Blog