import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import NoUserFound from './NoUserFound';
// import StarRating from './StarRating';
// import ReactStars from 'react-stars';

function LeaveReview({me, reviews}) {
    const [heading, setHeading] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const {id} = useParams();

    // error handling to show when user is not logged in..
    let reviewed = reviews.find((user) => user.user_id === me.id)

    function addReview(e) {
        e.preventDefault()
        const reviewData = {heading, comment, rating}
        console.log(JSON.stringify(reviewData))
        fetch(`/games/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            mode: "cors",
            body: JSON.stringify(reviewData)
        })
        .then(r => r.json())
        .then(() => {
            window.location.reload(true);
        })
    }

    // function ratingCheck(object) {
    //     if (object.target.value >)
    // }

    // function handleRating () {
    //     return setRating(rating)
    // }



    if (reviewed) {
        return (
            <div className="reviewed">
                <h3 style={{textDecoration: 'line-through'}}>✏️ Leave your Review:</h3>
                <p>You may only review once per game!</p>
            </div>
        )
    } else {
        return (
        <div className="add-review">
            <h3>✏️ Leave your Review</h3>
            <form className="create-review" onSubmit={addReview}>
                {/* maybe have an anonymouse posting option with checkbox */}
                <label htmlFor="heading">Heading &nbsp; </label>
                <input type="text" id="heading" value={heading} placeholder="Enter heading/title" onChange={e => setHeading(e.target.value)} required></input>
                <label htmlFor="comment">Comment </label>
                <textarea rows={5} cols={35} id="comment" value={comment} placeholder="Leave comment/review" onChange={e=> setComment(e.target.value)} required></textarea>
                <label htmlFor='rating'>Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                {/* <ReactStars
                    className="review-stars"
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    value={rating}  
                    onChange={handleRating}                  
                    /> */}
                <div className="range">
                    <input type="range" min="1" max="5" value={rating} className="slider" id="rating" onChange={e=> setRating(e.target.value)} required ></input>{rating}
                </div>
                
                <button type="submit">Leave review</button>
            </form>
        </div>
       )} 

    
}

export default LeaveReview;