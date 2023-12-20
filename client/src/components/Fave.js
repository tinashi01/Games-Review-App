import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Fave({me, reviews}) {
    const [game, setGame] = useState([])
    const {id} = useParams();

    useEffect(() => {
      fetch(`/games/${id}`)
        .then(r => r.json())
        .then(json => setGame(json))   
    }, [id])
    

    let fave = game.find((fave) => fave.game_id === id)
    // console.log(faves)
    // console.log(fave)  
    // console.log(reviews) 
 
    return (
        <>
            {fave && <p>❤️ Favourited</p>}
            {!fave && <p>🤍 Not Favourited</p>}
        </>
    ) 
 
    
}

export default Fave;