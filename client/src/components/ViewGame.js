import React, {useEffect, useState} from 'react';
import ReviewList from './ReviewList';
import Game from './Game';
import GameRating from './GameRating';
// import Fave from './Fave';
import { useParams } from 'react-router-dom';




function ViewGame ({me}) {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        fetch(`/games/${id}/reviews`)
            .then(r => r.json())
            .then(json => setReviews(json))
    }, [id])

    

    // function showEdit () {
    //     return <EditGame/>
    // }
    

    return (
        <>
            <div className="game-info">
                <Game/>
                {/* <Fave me={me}/> */}
                <GameRating reviews={reviews} />
            </div>  
            <div className="review-section">
                <ReviewList me={me} reviews={reviews}/> 
            </div> 
        </>
    )
}

export default ViewGame;