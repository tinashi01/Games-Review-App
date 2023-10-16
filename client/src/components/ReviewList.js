import React from 'react';
// import {useParams} from 'react-router-dom';
import LeaveReview from './LeaveReview';
import ReactStars from 'react-stars';

function ReviewList({me, reviews}) {
    
    reviews = reviews.sort((review1, review2) => review2.created_at.localeCompare(review1.created_at))

    // to do: add upvote/downvotes
    return (
        <React.Fragment>      
            <div className="reviews-wrapper">
                <h3>📝 User Reviews</h3>
                <ul className = 'reviews-list'>
                {reviews.map((review) => {
                    return (
                        <div className='review-wrapper' key={review.id}>
                            <li className = "review" >
                                <h4>{review.user.gamertag} says: {review.heading}</h4>
                                <p>"{review.comment}"</p>                           
                                <ReactStars
                                    className="user-stars"
                                    count={5}
                                    value={review.rating}
                                    size={24}
                                    color2={'#ffd700'} 
                                    edit={false}/>
                                <p>Rating: {review.rating}/5</p>
                            </li>
                        </div>
                        
                    )
                })}
                </ul>
            </div>    
                {/* if me.id exists render leaveReview */}
            <div className = "leave-review">
                { me.id && <LeaveReview me={me} reviews={reviews}/> }
                {!me.id && <div className="reviewed">
                                <h3 style={{textDecoration: 'line-through'}}>✏️ Leave your Review:</h3>
                                <p>Please signup/login to leave reviews.</p>
                            </div>}
            </div>
        </React.Fragment>        
        
            
        )
}

export default ReviewList;