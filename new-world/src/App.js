import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import UnAuthNav from './Components/UnauthNav';
import AuthNav from './Components/AuthNav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Community from './Pages/Community';
import Companies from './Pages/Companies';
import Dashboard from './Pages/Dashboard';
import Company from './Pages/Company';
import Forums from './Pages/Forums';
import Events from './Pages/Events';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(() => {
    localStorage.getItem('user') && setIsAuth(true)
  },[])
//SET UP CONDITIONAL RENDERING ANNNNNND PROTECTED ROUTES, PROTECTED ROUTES INSIDE THE NAVS NOT IN APP
if(isAuth === false){
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
}else{
  return(
    <div className='app'>
      <Router>
          <AuthNav />
          <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/company' component={Company}/>
          <Route path='/forums' component={Forums}/>
          <Route path='/events' component={Events}/>
                        
          </Switch>
      </Router>
    </div>
  );
}
}
export default App;
