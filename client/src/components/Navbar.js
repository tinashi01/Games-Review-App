import React from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav className = 'navbar'>
            <Link to = '/'>Home</Link>
            <Link to = '/games'>Games</Link>
            <Link to = '/dashboard'>Dashboard</Link>
            <Link to = '/signup'>Sign Up</Link>
            <Link to = '/login'>Log In</Link>
            <Link to = '/logout'>Log Out</Link>
        </nav>
    )
}

export default Navbar;