import React, {useState} from "react";

function EditGame ({id}) {
    const [name, setName] = useState("")
    const [image_url, setImage_url] = useState("")

    function editGame (e) {
        e.preventDefault()
        if (name==="") {
            const imageData = {image_url};
            fetch(`/games/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                mode: "cors",
                body: JSON.stringify(imageData)
            })
            .then(r => r.json())
            window.location.reload(true)
        } if (image_url==="") {
            const nameData = {name};
            fetch(`/games/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                mode: "cors",
                body: JSON.stringify(nameData)
            })
            .then(r => r.json())
            window.location.reload(true)
        } else {
            const editData = {name, image_url};
            fetch(`/games/${id}`, {
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
        
    }


    return (
        <div className="edit-game">
           <h4>Edit Game</h4>
           <form className="edit-form" onSubmit={editGame}>
                <label htmlFor="name">New Name</label>
                <input type="text" id="name" value={name} placeholder="Enter new game name" onChange={e => setName(e.target.value)}></input><br></br>
                <p>and/or</p>
                <label htmlFor="image">New Image Link</label>
                <input type="text" id="image" value={image_url} placeholder="Enter new image link" onChange={e => setImage_url(e.target.value)} ></input><br></br>
                <button type="submit" onClick={() => console.log("Games edited successfully")}>Save Changes</button>
           </form>
        </div>
        
    )
}

export default EditGame;