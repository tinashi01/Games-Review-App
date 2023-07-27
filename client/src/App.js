import React from 'react';
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



function App() {
  // fetch games
  
    

    


  // maybe can create a secondary navbar for dashboard that if logged in, 
  // shows that one instead
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes >
          <Route exact path="/" element = {<Home />} />
          <Route path="/games" element = {<GamesList/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/logout" element = {<Logout />}/>
          <Route path="/games/:id" element = {<ViewGame />}/>
          {/* get rid of navbar when in dashboard */}
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path="/error" element = {<NoUserFound/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  

  )
}

export default App;