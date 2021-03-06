import React, {useState} from 'react'


const Blog = ({blog, handleLike, handleDelete}) => {
  const [open, setOpen] = useState(false); 

  const controlOpen = () => {
    //console.log(blog);
    setOpen(!open);
  }

  return (
  <div className='blog'>
    {blog.title}
    <button onClick={controlOpen} className='view-blog-button'>{open ? 'Hide' : 'View'}</button>

    <div style={{display: open ? '' : 'none'}}>
      <p>Author: {blog.author}</p>
      <p>Url: {blog.url}</p>
      <p>Likes: {blog.likes} <button onClick={()=>handleLike(blog)}>like</button></p>
      <p><button onClick={()=>handleDelete(blog)}>Delete this blog</button></p>
    </div>

  </div>  
  )
}

export default Blog