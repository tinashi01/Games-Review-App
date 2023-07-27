import React, {useEffect, useState} from 'react';
import NoUserFound from './NoUserFound';
import { useNavigate } from 'react-router-dom';


// need conditional rendering for when 

function Dashboard() {

    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then(json => setUser(json));
    }, []);

    useEffect(() => {
        fetch("/me")
          .then((r) => {
            if(r.ok){
                setUser(r.json())  
            } else {
                navigate("/error")
            }
          })
        //   .then(json => setUser(json));
        }, []);

    return (
        <main className="user-dashboard">
            <h1>Dashboard</h1>
            <h3>Welcome {user.gamertag}</h3>
            <h2>Reviewed Games</h2>
            <h2>Favourited Games</h2>
        </main>
        

    )
}

export default Dashboard;