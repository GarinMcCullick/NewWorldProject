import React, { useContext, useState } from 'react'
import './App.css'
import UnAuthNav from './Components/UnauthNav';
import AuthNav from './Components/AuthNav'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Community from './Pages/Community';
import Companies from './Pages/Companies';
import { myContext } from '../src/Context'

function App() {
  const context = useContext(myContext)
  console.log('Context:', context)
  const [loggedIn, setLoggedIn] = useState(false)

  if(context === true){
    setLoggedIn(loggedIn)
  }else{
    setLoggedIn(!loggedIn)
  }
//SET UP CONDITIONAL RENDERING ANNNNNND PROTECTED ROUTES, PROTECTED ROUTES INSIDE THE NAVS NOT IN APP
  return (
    <div className='app'>
          {loggedIn && <UnAuthNav />}
          <Home />
          <About />
          <Community />
          <Companies />
    </div>
  );
}

export default App;
