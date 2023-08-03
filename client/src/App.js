import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import ViewGame from './components/ViewGame';
import NoUserFound from './components/NoUserFound';
import Deals from './components/Deals';
import AdminDashboard from './components/AdminDashboard';
import './App.css'



function App() {
  // fetch games from API
  const [user, setUser] = useState([]);
  // const [admin, setAdmin] = useState(false);
  // const [faves, setFaves] = useState([]);
    // const {id} = useParams();

  // useEffect(() => {
  //     fetch(`/users/${user.id}/favourite_games`)
  //         .then(r => r.json())
  //         .then(json => setFaves(json))
  // }, [user.id])

  useEffect(() => {
      fetch("/me")
          .then(r => r.json())
          .then(json => setUser(json))
  }, [])

  return (
    <Router>
      <React.Fragment>
        <Navbar user={user}/>
        <Routes >

          {/* public  */}
          <Route exact path="/" element = {<Home />} />
          <Route path="/games" element = {<GamesList user={user}/>}/>
          <Route path="/games/:id" element = {<ViewGame me={user}/>}/>
          <Route path="/error" element = {<NoUserFound/>}/>


          {/* public but to disappear after logged in */}
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/login" element = {<Login />}/>
          
          {/* logged in users only */}

          <Route path="/dashboard" element = {<Dashboard user={user}/>}/>
          <Route path='/dashboard/deals' element = {<Deals user={user}/>}></Route>
          <Route path="/logout" element = {<Logout />}/>
          
          

          {/* admin user */}
          <Route path="/admin" element = {<AdminDashboard/>}/>

          {/* {admin ? <Route path="/admin" element = {<AdminDashboard/>}/> : null} */}
        </Routes>
      </React.Fragment>
    </Router>
  

  )
}

export default App;