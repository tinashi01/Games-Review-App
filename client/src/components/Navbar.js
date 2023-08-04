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
            <>
                <div className='profile-icon'>
                    {user.image && <img className='user-image' src={user.image} alt={user.username}/>}
                    {!user.image && <img className='no-image' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJcAlwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EADoQAAICAQICBQoEBAcAAAAAAAABAgMEBREGIRIxQVFhExQyQlJxgZGx0SIjNMEzoeHwFiQ1Q3Jzkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNVq+uYumJxsl5S/bdVRfP49yA2u5gZmsafhtq/KrUl1xi+k/kiD6lrudqG8Z2uqp/7db2+feavqAnFvF+BB7V1Xz8dkvqWv8Z42/6S7b/kiGACdU8XadP+JG6v3x3+htcPU8LN5Y2TXOXs77P5HMB9QOtblTn2mcSZ2C1GyfnFK9Wx817pfcmWl6ri6nV0saf416dcuUogZ4AAAAAAAAAAAGq4h1RaXhOcWnfP8Naff3/ADC4k1/zDfFxGpZMlzl2Vr7kInOVk5TnJynJ7uTe7bE5ysnKc5OUpPeTb5tnkAAe6q53WRrqg52S5RjFc2B4BI8LhW2cVLNuVe/qV838+oznwpg7crsnfsfSj9gIcDf5/C+RRBzxbFel6jW0v6mhacZOMk009mmttgKF3Hvtxro3UTlCyL3Uky0AOhcP63DVKehYlDJgvxQXVJd6Nycpxci3EyIX0S6FkHumdK0nPr1HCrya+W/KUfZl2oDMAAAAAAABRnOeItQeoanZKL3qrfk6/cu34snGu5Tw9JybovaShtF+L5I5muQAAACccO6VDBxVbZFecWx3k+2K9n7kS0ilZGqYtUlvF2rdeC5/sdEAAAAR7irSo20vOoh+ZBfmJL0l3+9fQkJSUI2RcJ+jJbP3MDmIPVkHVZOt9cJOL+D2PIA3/AAfqHm2o+bTltXkcl4SXV9vkaA9QnKucbIPaUJKUX3NAdZBZxLlkY1V0eqyCkvii8AAAAAARzjezoaXVWvXtX8kyDkz47/SYvd5V/QhgAAAZmkXKjVMSyT2irUm/B8v3OhnMCc8ParDPxY12S/zNSSkvaXtIDbAAAUlKMIuc2lGK3e/cVI/xTqkaaZYNMk7bF+Zt6kfuwIlZPytkrPbk5fN7nkAAAAOicK2u3Q8Zv1d4/Jm3NFwb/okP+yf1N6AAAAAAR7jarp6TGxL+Han8+RBTp+r4vnmm5FC9KcH0ff1r+ZzDZrk+tdYAAAD3VbZRZGyqcoTi+TT6jIwNOy8+W2NU5RT2c3yiviSDE4TrSTy8mUn2wqWy+bAs4XFU4LoZlHT5enW9n8UZr4qwNuVd7l3dBfcyquH9LrX6RS8Zyk/3Lr0fTWtvMqP/ACBHs/ii+2Lrw6vIJ+u3vL+hoJNyk3Jtyb3bb33ZOreHdLs6sfyb765yX7mry+E9t3hZO77IWr919gIwC/l4eRhW+TyanB9m/U/cywAALlFMsi6umvnOyajH3sDoXC9XktDxV2yTn82bUt0VRpprqgvwwior4FwAAAAAAozn3FOnvB1Kc4x/Jv8Axx8H2r++86EYGtadDU8KVEmoz9KufsyA5mb/AIf0HzxLKzN1R6kO2zx931MPS9Ksv1fzPJg4eSbdq8F9+XzJ4koxSSSSWyS7AKVwjVCMK4qMIrZJLZIqAAAAAAAW8iirJqdWRCNlb61IhWu6NPTZK2reeNJ7Jvrg+5/cnJ4yKq8imdNselCa2aA5mSTgzTndlyzrI/gp5Q8ZP7L6msWkZM9Ynp1a3nGXOXYo+0/gdBwMSrBxK8ahbQrW3v8AEDJAAAAAAAAAAFiWNW7XcoJWuKi5drXcW2tmZZ5lBS60BiguTqkurmeNtgKAAAAVS35LmwKFYpyeyLkam/S5F6MVFbLkBarx667J2qC8pNJSltzaXUXgAAAAAAAAAAAAAAAUcU+tIqAPDqj3FPIx8S4APCriuw9JJdSRUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" alt="no image set"/>}
                    <p className='user-username'>{user.username}</p>
                </div>
                <nav className = 'admin-navbar'>
                    <Link to = '/dashboard'>Dashboard</Link>
                    <Link to = '/games'>Games</Link>
                    <Link to = '/admin'>Admin</Link>
                    <Link to = '/logout'>Log Out</Link>
                    

                </nav>
            </>
        )
    } else {
       return (
        <>
            <div className='profile-icon'>
                {user.image && <img className='user-image' src={user.image} alt={user.username}/>}
                {!user.image && <img className='no-image' src="data:image/jpeg;base64,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" alt="no image set"/>}
                <p className='user-username'>{user.username}</p>
            </div>
            <nav className = 'private-navbar'>
                <Link to = '/dashboard'>Dashboard</Link>
                <Link to = '/games'>Games</Link>   
                <Link to = '/dashboard/deals'>Deals</Link>
                <Link to = '/logout'>Log Out</Link>
                
                {/* <Link to = '/admin'>Admin</Link> */}
                
            </nav>
            
        </>
    ) 
    }
    
}

export default Navbar;