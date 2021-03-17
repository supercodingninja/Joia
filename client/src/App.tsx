import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import Post from './Pages/Profile'
import Account from '../src/Pages/Account'
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup'
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <Router>
         <Navbar />

         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
         </Switch>

         <Footer />      
  </Router>
  );
}

export default App;



