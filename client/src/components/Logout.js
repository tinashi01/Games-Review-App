import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout () {

    const navigate = useNavigate();
    // popup for confirm logout ?
    // if yes, logout if no, stay on same page..

    function logoutUser() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(r => console.log("logout successful"))
        .then(() => {
            navigate("/")
        })
    }

    return (
       <button className="logout" onClick={logoutUser}>Logout</button> 
    )
}

export default Logout;