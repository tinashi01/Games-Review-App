import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function loginUser(e) {
        e.preventDefault()
        const loginData = {username, password}
        console.log(JSON.stringify(loginData));
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            mode: "cors",
            body: JSON.stringify(loginData)
        })
        .then(r => r.json())
        .then(() => {
            
            navigate("/dashboard")
            window.location.reload(true)
        })
    }

    return (
        <section className="login-section">
            <h1>Login</h1>
            <form className="login" onSubmit={loginUser}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value = {username} placeholder="Enter Username" onChange={e => setUsername(e.target.value)}></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value = {password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit" onClick={() => console.log("User logged in successfully")}>Login</button>
            </form>
        </section>
    )
}

export default Login;