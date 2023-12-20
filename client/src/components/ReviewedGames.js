import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import EditReview from './EditReview';
import ReactStars from 'react-stars';

function ReviewedGames(){
    const [show, setShow] = useState(false)
    const [userReviews, setUserReviews] = useState("");
    const {id} = useParams();

    useEffect(() => {
        fetch(`/users/${id}/reviews`)
            .then(r => r.json())
            .then(json => setUserReviews(json))
    }, [id])

    if (!userReviews) return <h3> Loading...</h3>

    if (userReviews.length === 0) {
        return (<p>No Reviews Yet</p>)
    } else {
        return (
        <React.Fragment>
            
            <ul className = 'user-reviews-list'>
                {userReviews.map((review) => {
                    return (
                        <li className = "user-review" key = {review.id}>
                            <h3>{review.game.name}</h3>
                            <button className="edit-user-review" onClick={() => setShow(!show)}>{show ? "Exit" : "✏️ Edit Review"}</button>
                            {show ? <EditReview id={id} review={review}/> : null}
                            {/* <img src={review.game.image_url} alt={review.game.name}/> */}
                            <h3>{review.heading}</h3>
                            <h4>{review.comment}</h4>
                            {/* <input type="checkbox" id="expanded"/>
                            <label className="label" for="expanded" role="button">read more</label> */}
                            <ReactStars
                                className="review-stars"
                                count={5}
                                value={parseInt(review.rating)}
                                size={24}
                                color2={'#ffd700'} 
                                edit={false}/>
                            <p>{review.rating}/5</p>
                        </li>
                    )
                })}
            </ul>
            
        </React.Fragment>
    )
    }
    
}

export default ReviewedGames;