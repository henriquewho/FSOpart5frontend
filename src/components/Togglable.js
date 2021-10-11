/* Togglable has two divs, that never appear at the same instant. One 
has only a button to show the other div, and the other has the same button
plus the form, which is a child component from the Togglable component */
import React, {useState, useImperativeHandle} from 'react'

const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () =>{
        setVisible(!visible)
    }

    useImperativeHandle(ref, ()=>{
        return {toggleVisibility}
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisibility} className='button-add-form'>Cancel</button>
            </div>
        </div>
    )
})

export default Togglable
