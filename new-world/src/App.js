import './App.css'
import UnAuthNav from './Components/UnauthNav';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Community from './Pages/Community';
import Companies from './Pages/Companies';

function App() {
  return (
    <div className='app'>
    <Router>
        <UnAuthNav />
        <Home />
        <About />
        <Community />
        <Companies />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/community' component={Community}/>
        <Route exact path='/companies' component={Companies}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
