import React, {useState} from "react";

// PATCH  /users/:user_id/reviews/:id

function EditReview ({id, review}) {
    const [heading, setHeading] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    function editReview (e) {
       const editData = {heading, comment, rating};
        fetch(`/users/${id}/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            mode: "cors",
            body: JSON.stringify(editData)
        })
        .then(r => r.json())
        window.location.reload(true) 
    }
    

    return (
        <div className="edit-review">
           <h4>Edit Review</h4>
           <form className="edit-review-form" onSubmit={editReview}>
                <label htmlFor="heading">New Heading</label>
                <input type="text" id="heading" value={heading} placeholder={review.heading} onChange={e => setHeading(e.target.value)} required/>
                <label htmlFor="comment">New Comment</label>
                <input type="text" id="comment" value={comment} placeholder={review.comment} onChange={e => setComment(e.target.value)} required/>
                <label htmlFor="rating">New Rating</label>
                <div className="edit-range">
                    <input type="range" min="1" max="5" value={rating} className="slider" id="rating" onChange={e=> setRating(e.target.value)} required></input>{rating}
                </div>
                <button type="submit" onClick={() => console.log("Review edited successfully")}>Save Changes</button>
           </form>
        </div>
        
    )
}

export default EditReview;