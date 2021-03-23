import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React from 'react';
import './App.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import ProductPost from './Pages/ProductPost'
import Profile from '../src/Pages/Profile'
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup'
import Footer from "./components/shared/Footer/Footer";
import { useAuthTokenStore}  from "./utils/auth";

function App() {
  useAuthTokenStore();
  return (
    <Router>
         <Navbar />

          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/post" component={ProductPost} />
              <Route exact path="/account" component={Profile} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
          </Switch>

         <Footer />      
  </Router>
  );
}

export default App;



