import React, {useState} from 'react'

function BlogForm({createBlog}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleTitle = e => { setTitle(e.target.value); }
    const handleAuthor = e => { setAuthor(e.target.value); }
    const handleUrl = e => { setUrl(e.target.value); }

    const handleAdd = e =>{
        e.preventDefault();
        createBlog({
            title, author, url
        })
        setTitle(''); 
        setAuthor(''); 
        setUrl(''); 
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                Title: <input type='text' value={title} onChange={handleTitle}></input><br/>
                Author: <input type='text' value={author} onChange={handleAuthor}></input><br/>
                Url: <input type='text' value={url} onChange={handleUrl}></input><br/>
                <div>
                    <button type='submit' className='button-add-form'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm
