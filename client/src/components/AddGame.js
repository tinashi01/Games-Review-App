import React, {useState} from 'react';

function AddGame() {
    const [name, setName]= useState("")
    const [image, setImage]= useState("")

    function addGame(e) {
        e.preventDefault()
        const gameData = {name, image}
        console.log(JSON.stringify(gameData));
        fetch(`/games`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            mode: "cors",
            body: JSON.stringify(gameData)
        })
        .then(r => r.json())
        .then(() => {
            window.location.reload(true);
        })
    }
    

    return (
        <div className="add-game">
           <h2>➕ Add Game</h2> 
           <form className="create-game" onSubmit={addGame}>
                {/* maybe have an anonymouse posting option with checkbox */}
                <label htmlFor="Name">Name  </label>
                <input type="text" id="name" value={name} placeholder="Enter game name" onChange={e => setName(e.target.value)} required></input>
                <label htmlFor="image">Image Link </label>
                <input type="text" id="image" value={image} placeholder="Enter game image link" onChange={e => setImage(e.target.value)} required></input>
            
                <button type="submit">Add Game</button>
            </form>
        </div>
        
    )
}

export default AddGame;