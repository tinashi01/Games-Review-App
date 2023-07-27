import React, {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function GamesList() {
    // const navigate = useNavigate();

    const [games, setGames] = useState([]);
    

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
        <main>
            <h1>Games List</h1>
            <ul className="games">
                {games.map((game) => {
                    return (
                        <div className="game-column" key={game.id}>
                            <li className = "game-card">
                                <img className="game-image" src={game.image_url} alt={game.name}/>
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