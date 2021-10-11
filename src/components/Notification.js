import React from 'react'

function Notification( {message}) {
    if (!message) return (null)
    else return (
        <div className={message.status}>
         Message: {message.message} 
        </div>
    )
}

export default Notification