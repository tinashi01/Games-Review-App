import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';


// View game needs the games title, image, review, rating, 
// area where user can click to leave review
// area where other reviews can be seen
// 

function ViewGame () {
    const [game, setGame] = useState("");
    const {id} = useParams();

    useEffect (() => {
        fetch(`/games/${id}`)
            .then(r => r.json())
            .then(json => setGame(json))
    }, [id])

    if (!game) return <h2>Loading...</h2>

    const {name, image_url} = game


    return (
        <React.Fragment>
           <div className='individual-game'>
                <h3>{name}</h3>
                <img className='individual-image' src={image_url} alt={name}/>
           </div>

           <h3>User Reviews</h3>
           <ReviewList />

           <button>Leave a review</button>
           {/* leave a review button tht redirects to lower part of page */}
           {/* leave a review button at the very end */}
        </React.Fragment>
        
    )
}

export default ViewGame;