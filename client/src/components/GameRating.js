import React from "react";
// import {Rating} from 'react-simple-star-rating';
import ReactStars from 'react-stars'

function GameRating ({reviews}) {
    // const [average, setAverage] = useState(0)
    // const ratings = reviews.map(review => ([review.rating]))
    const ratings = reviews.map(review => {
        return parseInt(review.rating)
        })
    const totalRating = ratings.reduce((previousRating, currentRating, index) => previousRating + currentRating, 0);
    
    
    function averageRatingCheck() {
        const averageRating = totalRating / ratings.length
        if (averageRating) {
            return averageRating
        } else {
            return 0
        }
    }
    // function calculateAverage() {
    //     
    //     setAverage(averageRating)
    //     return average > 0 ? average.toFixed(1) : 0;
    // }

    // return (
    //     <div className="average-rating">
    //        <h4>Average User Rating: {averageRatingCheck()}</h4> 
    //        {averageRatingCheck() ? "" : <p>No reviews yet, be the first to review!</p>}
    //        {/* <Rating initialValue={calculateAverage} readOnly /> */}
    //     </div>
        
    // )

    return (
        <div className="average-rating">
            <p>Average User Rating: {Math.round(averageRatingCheck()*100)/100}</p> 
            <ReactStars
                className="stars"
                count={5}
                value={averageRatingCheck()}
                size={24}
                color2={'#ffd700'} 
                edit={false}/>
            {averageRatingCheck() ? "" : <p>No reviews yet, be the first to review!</p>}
        </div>
        
    )


    // function reviewsAverage () {
    //     let average = reviews.reduce((acc, review) => {
    //         return acc + review.rating / reviews.length
    //     }, 0)
    //     return average > 0 ? average.to
    // }
    // return (
    //     <h1> rating</h1>
    // )
}

export default GameRating;