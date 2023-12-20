import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import no_image from "../no_image.png";

function Game() {
    const [game, setGame] = useState("");
    const {id} = useParams();

    // const admin = me.admin;

    useEffect (() => {
        fetch(`/games/${id}`)
            .then(r => r.json())
            .then(json => setGame(json))
    }, [id])

    if (!game) return <h2>Loading...</h2>

    const {name, image_url} = game

    return (
        <div className='individual-game'>
            <h2>{name}</h2>
            {image_url && <img className="individual-game-image" src={image_url} alt={name}/>}
            {!image_url && <img className='no-individual-game-image' src={no_image} alt="no game image"/>}
        </div>

    )
}

export default Game;