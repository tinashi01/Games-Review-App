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
            window.location.reload(true)
        })
    }

    return (
        <div className="logout-options">
           <h2>❌ Are you sure you want to logout?</h2>
           <p>Yes, I still want to <button className="logout" onClick={logoutUser}>Logout</button></p>
           
        </div>
       
    )
}

export default Logout;