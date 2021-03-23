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


// Import the useAuthTokenStore hook. //  // WHERE IS THIS MODULE: WE NEED IT/NEED TO FIGURE OUT HOW TO MERGE IT. //
import { useAuthTokenStore } from "./utils/auth";


function App() {
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
};


// Including the useAuthTokenStore. //
// Including the useAuthTokenStore hook will allow your app to reauthenticate already logged in users if they refresh the page, or leave and return to the application. //
// The best place for this is inside your primary App component. //
function App() {

    // Use the hook to reauthenticate stored tokens.
    useAuthTokenStore();

    /** Rest of your App component code here */
};

export default App;



