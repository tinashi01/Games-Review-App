import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function ReviewList() {

    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/games/${id}/reviews`)
            .then(r => r.json())
            .then(json => setReviews(json))
    }, [id])

    if (!reviews) return <h3>No Reviews yet, be the first!</h3>


    // to do: add upvote/downvotes

    return (
        <ul className = 'reviews-list'>
            {/* <h3>{reviews}</h3> */}
            {reviews.map((review) => {
                return (
                    <li className = "review" key={review.id}>
                        <h4>{review.heading}</h4>
                        <p>{review.comment}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Reviewed by: {review.user.gamertag}</p>
                    </li>
                )
            })}
        </ul>


    )
}

export default ReviewList;