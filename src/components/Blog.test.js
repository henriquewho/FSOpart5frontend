import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {

    const blog = {
        title: 'title1', author: 'author1', url: 'url1', likes: 'likes1'
    }
  
    const component = render(
      <Blog blog={blog}/>
    )
  
    // method 1
    expect(component.container).toHaveTextContent(
      'title1'
    )

    expect(component.container).not.toHaveTextContent(
      'likes1'
    )
})


