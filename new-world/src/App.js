import React, { useContext } from 'react'
import './App.css'
import UnAuthNav from './Components/UnauthNav';
import AuthNav from './Components/AuthNav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Community from './Pages/Community';
import Companies from './Pages/Companies';
import Dashboard from './Pages/Dashboard';
import Forums from './Pages/Forums';
import Events from './Pages/Events';
import { myContext } from './Context';
import Roster from './Pages/Roster';

function App() {
  
  const userObject = useContext(myContext)
  console.log(userObject)
  
//SET UP CONDITIONAL RENDERING ANNNNNND PROTECTED ROUTES, PROTECTED ROUTES INSIDE THE NAVS NOT IN APP
return (
  userObject ? (
  
    <div className='app'>
      <Router>
          <AuthNav />
          <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/Roster' component={Roster}/>
          <Route path='/forums' component={Forums}/>
          <Route path='/events' component={Events}/>  
          </Switch>
      </Router>
    </div>

  ) : (

  <div className='app'>
        <Router>
          <UnAuthNav />
          <Home />
          <About />
          <Community />
          <Companies />
        </Router>
    </div>
    
  )
)
  }


export default App;
