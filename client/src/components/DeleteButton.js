import React from 'react';

function DeleteGame ({id}) {


    function deleteGame() {
        fetch(`/games/` + id, {
            method:"DELETE"
        })
        .then(r => console.log("delete successful"))
        window.location.reload(true);
    }
    return (
        <button className = 'delete-button' onClick={deleteGame}>✖️</button>
    )
}

export default DeleteGame;