import React, { useState, useEffect, useRef} from 'react'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'
import Login from './components/Login'
import UserInfo from './components/UserInfo'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  const blogFormRef = useRef(); 

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect( ()=>{
    const loggedUser = window.localStorage.getItem('loggedUser'); 
    if (loggedUser) {
      const loggedUserApp = JSON.parse(loggedUser)
      setUser(loggedUserApp); 
      blogService.setToken(loggedUserApp.token)
    }
  }, [])

  const handleUsername = e =>{
    e.preventDefault(); 
    setUsername(e.target.value)
  }
  const handlePass = e =>{
    e.preventDefault(); 
    setPassword(e.target.value)
  }

  const handleLogin = async e =>{
    e.preventDefault();
    
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
      blogService.setToken(user.token); 
      setUser(user); 
      setUsername(''); 
      setPassword('');
    } catch (err){
      console.log('Error on login: ', err);
      setMessage({message: err.message, status: 'error'})
      setTimeout(()=>setMessage(null), 5000); 
    }
  }

  const loginForm = () => {
    return (
      <>
      <Login handleUsername={handleUsername} handlePass={handlePass} password={password} username={username} handleLogin={handleLogin}/>
      <br/>
      </>
    )
  }

  const handleLogout = () => {
    window.localStorage.clear(); 
    window.location.reload(); 
  }

  const handleAdd = async newBlog => {
    try {
      const resp = await blogService.create(newBlog)
      setBlogs(blogs.concat(resp));

      setMessage({message: 'Blog added!', status: 'success'})
      setTimeout(()=>setMessage(null), 5000); 
      
    } catch (err){
      console.log('Error adding blog: ', err);
      setMessage({message: err.message, status: 'error'})
      setTimeout(()=>setMessage(null), 5000); 
    }

  }

  /*
  const handleAdd = async e => {
    e.preventDefault(); 
    try {
      const newBlog = {
        title, author, url
      }
      const resp = await blogService.create(newBlog)
      setTitle(''); 
      setAuthor(''); 
      setUrl(''); 
      setBlogs(blogs.concat(resp)); 

      blogFormRef.current.toggleVisibility(); 

      setMessage({message: 'Blog added!', status: 'success'})
      setTimeout(()=>setMessage(null), 5000); 
    } catch (err){
      console.log('Error adding blog: ', err);
      setMessage({message: err.message, status: 'error'})
      setTimeout(()=>setMessage(null), 5000); 
    }
  }
  */

  /*
  const handleTitle = e => {
    e.preventDefault(); 
    setTitle(e.target.value); 
  }
  const handleAuthor = e => {
    e.preventDefault(); 
    setAuthor(e.target.value); 
  }
  const handleUrl = e => {
    e.preventDefault(); 
    setUrl(e.target.value); 
  }
  */

  const blogsList = () => {
    return (
      <div>

        <Togglable buttonLabel='Create a new blog entry' ref={blogFormRef}>
          <BlogForm createBlog={handleAdd}/>
        </Togglable>

        <br/>

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}

        <br/>

        <UserInfo user={user} handleLogout={handleLogout}/>
      </div>
    )
  }

  return (
    <div>
      <h2>Blog App</h2>
      <Notification message={message}/>
      
      {(user===null) ? 
      loginForm() :
      blogsList()
      }
      
    </div>
  )
}

export default App