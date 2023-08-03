import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import Game from './Game';
import GameRating from './GameRating';
import EditGame from './EditGame';

function ViewGame ({me}) {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/games/${id}/reviews`)
            .then(r => r.json())
            .then(json => setReviews(json))
    }, [id])

    return (
        <React.Fragment>
            <Game/>
            <EditGame/>
            <GameRating reviews={reviews} />
            
            <ReviewList me={me} reviews={reviews}/>

        </React.Fragment>
        
    )
}

export default ViewGame;