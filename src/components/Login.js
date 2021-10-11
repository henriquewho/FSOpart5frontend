import React from 'react'

function Login({handleUsername, handlePass, username, password, handleLogin}) {
    return (
        <form onSubmit={handleLogin}>
            <div>
                <input type='text' placeholder='username' value={username} onChange={handleUsername}></input>
            </div>
            <div>
                <input type='text' placeholder='password' value={password} onChange={handlePass}></input>
            </div>
            <div>
                <button type='submit' >Login</button>
            </div>
        </form>
    )
}

export default Login
