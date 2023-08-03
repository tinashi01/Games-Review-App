import React, {useEffect, useState} from 'react';
// import {useParams} from 'react-router-dom';
import LeaveReview from './LeaveReview';

function ReviewList({me, reviews}) {
    
    

    // to do: add upvote/downvotes
    return (
        <React.Fragment>      
            <div className="reviews-wrapper">
                <h3>User Reviews</h3>
                <ul className = 'reviews-list'>
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
            </div>    
                {/* if me.id exists render leaveReview */}
            <div className = "leave-review">
                { me.id && <LeaveReview me={me} reviews={reviews}/> }
            </div>
        </React.Fragment>        

            
        )
}

export default ReviewList;