import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [gamertag, setGamertag] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const navigate = useNavigate();

    function addUser(e) {
        e.preventDefault()
        const signupData = {username, image, bio, gamertag, password, confirmation}
        console.log(JSON.stringify(signupData));
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            mode: "cors",
            body: JSON.stringify(signupData)
        })
        .then(r => r.json())
        .then(()=> {
            navigate("/login");
        })
    }

    return (
        <section className="signup-section">
            <h1>Sign Up</h1>
            <form className="signup" onSubmit={addUser}>
                <label htmlFor="username" >Username:</label>
                <input type="text" id="username" value={username} placeholder="Enter username" onChange={e => setUsername(e.target.value)} required></input><br></br>
                <label htmlFor="image">Profile Picture:</label>
                <input type="text" id="image" value={image} placeholder="Enter image link" onChange={e => setImage(e.target.value)} ></input><br></br>
                <label htmlFor="bio">Bio:</label>
                <textarea rows={5} cols={50} id="bio" value={bio} placeholder="Enter bio description" onChange={e => setBio(e.target.value)}></textarea><br></br>
                <label htmlFor="gamertag">Gamertag:</label>
                <input type="text" id="gamertag" value={gamertag} placeholder="Enter gamertag aka your public display name" onChange={e => setGamertag(e.target.value)} required></input><br></br>
                <label htmlFor="password">Create Password:</label>
                <input type="text" id="password" value={password} placeholder="Create Password" onChange={e => setPassword(e.target.value)} required></input><br></br>
                <label htmlFor="confirmation">Confirm Password:</label>
                <input type="text" id="confirmation" value={confirmation} placeholder="Confirm Password" onChange={e => setConfirmation(e.target.value)} required></input><br></br>
                <button type="submit" onClick={() => console.log("User created successfully")}>Submit</button>
            </form>
        </section>
    )

}

export default SignUp;