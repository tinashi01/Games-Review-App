import React from 'react';
import {Link} from 'react-router-dom';

function Navbar ({user}) {
    if (user.error) {
        return (
            <nav className = 'public-navbar'>
                <Link to = '/'>Home</Link>
                <Link to = '/games'>Games</Link>
                <Link to = '/signup'>Sign Up</Link>
                <Link to = '/login'>Log In</Link>

            </nav>)
    } if (user.admin === true) {
        return (
            <nav className = 'admin-navbar'>
                <Link to = '/dashboard'>Dashboard</Link>
                <Link to = '/games'>Games</Link>
                <Link to = '/admin'>Admin</Link>
                <Link to = '/logout'>Log Out</Link>
                <p className='admin-username'>{user.username}</p>

            </nav>
        )
    } else {
       return (
        
        
        <nav className = 'private-navbar'>
            <Link to = '/dashboard'>Dashboard</Link>
            <Link to = '/games'>Games</Link>   
            <Link to = '/dashboard/deals'>Deals</Link>
            <Link to = '/logout'>Log Out</Link>
            {/* <Link to = '/admin'>Admin</Link> */}
            <div className='profile-icon'>
                <img className='user-image' src={user.image} alt={user.username}/>
                <p className='user-username'>{user.username}</p>
            </div>
        </nav>
    ) 
    }
    
}

export default Navbar;