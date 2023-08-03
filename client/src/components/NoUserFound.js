import React from "react";
import { Link } from "react-router-dom";

export default function NoUserFound() {
    return (
        <React.Fragment>
            <h3>No User Detected!</h3>
            <p >Please </p>
            <Link to="/signup"><p>signup </p></Link>
            <p>or </p>
            <Link to="/login"><p>login. </p></Link>
        </React.Fragment>
        
        
    )
}