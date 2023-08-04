import React from 'react';
// import NoUserFound from './NoUserFound';
// import { useNavigate } from 'react-router-dom';
import ReviewedGames from './ReviewedGames';
import NoUserFound from './NoUserFound';
import FavouritesList from './FavouritesList';


// need conditional rendering for when 



function Dashboard({user}) {
  if (!user) {
    return (<NoUserFound/>)
  } else {
    return (
    <main className="user-dashboard">
      {/* <div className='profile-icon'>
        <img className='user-image' src={user.image} alt={user.username}/>
        <p className='user-username'>{user.username}</p>
      </div> */}
        
        <h1>🖥️ Dashboard</h1>
        <h3>Welcome {user.gamertag}</h3>
        <div className="reviewed-games">
          <h2>✍️ Reviews</h2>
          <ReviewedGames />
        </div>
        <div className='favourited-games'>
          <h2>❤️ Favourited Games</h2>
          <FavouritesList />
        </div>
        {/* <div className='thanks'>
          <h2>Thank you for signing up!</h2>
          <p>Here is a present from the developer of this app!</p>
        </div> */}
        
    </main>
    

    )
  }
    
}

export default Dashboard;