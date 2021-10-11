import React from 'react'

function UserInfo({user, handleLogout}) {
    return (
        <div>
            {user.name} is logged <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserInfo
