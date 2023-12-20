import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function FavouritesList () {

    const [faves, setFaves] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/users/${id}/favourite_games`)
            .then(r => r.json())
            .then(json => setFaves(json))
    }, [id])
    

    if (faves.length === 0) {
       return (<p>No Favourited Games</p>)
    } else {
       return (
        <div className='favourites-wrapper'>
            <ul className = 'favourites-list'>
                {faves.map((fave) => {
                    return (
                        <li className="favourites" key={fave.id}>
                            <Link to={`/games/${fave.game.id}`}><img src={fave.game.image_url} alt={fave.game.name}/></Link>
                            {/* <h4>{fave.game.name}</h4> */}
                        </li>
                    )
                })}
            </ul>
        </div>
        ) 
    }

    
}

export default FavouritesList;
