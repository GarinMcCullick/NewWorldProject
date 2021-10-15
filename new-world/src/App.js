import './App.css'
import UnAuthNav from './Components/UnauthNav';
import { BrowserRouter as Router} from 'react-router-dom';
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
    </Router>
    </div>
  );
}

export default App;
