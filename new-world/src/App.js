import React, { useContext } from 'react'
import './App.css'
import UnAuthNav from './Components/UnauthNav';
import AuthNav from './Components/AuthNav'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Community from './Pages/Community';
import Companies from './Pages/Companies';
import { myContext } from '../src/Context'

function App(userObject) {
  const context = useContext(myContext)
  console.log('USEROBJ', context)
  console.log("PROPS", userObject)
  if (!userObject) {

  return (
    <div className='app'>
      <Router>
          <UnAuthNav />
          <Home />
          <About />
          <Community />
          <Companies />
      </Router>
    </div>
  );

  }else {

    return (
      <Router>
        <AuthNav />
      </Router>
    );

  }
}

export default App;
