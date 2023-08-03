import React, {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import FaveButton from './FaveButton';

function GamesList({user}) {
    // const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const admin = user.admin

    useEffect(() => {
        fetch("/games")
          .then((r) => r.json())
          .then(json => setGames(json));
      }, []);
    
    // function viewGame() {
    //     fetch("/games/" + games.id, {
    //         method: "GET"
    //         // headers: {
    //         //     "Content-Type":"application/json"
    //         // },
    //         // mode: "cors",
    //         // body: JSON.stringify(signupData)
    //     })
    //     .then(r => r.json())
    //     .then(()=> {
    //         navigate("/games/" + games.id);
    //     })
    // }


    return (
        <main className = 'games-list'>
            <h1>Games List</h1>
            <ul className="games">
                {games.map((game) => {
                    return (
                        <div className="game-column" key={game.id}>
                            <li className = "game-card">
                                {admin ? <DeleteButton id={game.id}/> : null}
                               
                                <img className="game-image" src={game.image_url} alt={game.name}/><br></br>
                                {user.id && <FaveButton id={user.id} game_id={game.id}/>}
                                <h3>{game.name}</h3>
                                <Link to={`/games/${game.id}`}><button className="view-game">View {game.name}</button></Link>  
                            </li>
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}

export default GamesList;