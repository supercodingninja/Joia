import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useRef } from 'react';
import './App.css';
import { Navbar } from './components/shared/Navbar/Navbar';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import ProductPost from './Pages/ProductPost'
import Profile from '../src/Pages/Profile'
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup'
import Footer from "./components/shared/Footer/Footer";
import { useAuthTokenStore, useLogin, useLogout}  from "./utils/auth";


// Including the useAuthTokenStore. //
// Including the useAuthTokenStore hook will allow your app to reauthenticate already logged in users if they refresh the page, or leave and return to the application. //
// The best place for this is inside your primary App component. //
// Ref. https://reactjs.org/docs/react-without-es6.html; and https://github.com/supercodingninja/mern-jwt-auth-setup#prerequisites forked from ac524/mern-jwt-auth-setup //
function App () {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore()

  /** Rest of your App component code here */
  // Reference https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example; and https://www.alibabacloud.com/blog/how-to-implement-authentication-in-reactjs-using-jwt_595820 //  
  return (
    <Router>
      <Navbar />

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post" component={ProductPost} />
          <Route exact path="/account" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
      </Switch>

      <Footer />      
    </Router>
  );

  // Working on this function. //
  function LoginForm() {

    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {

          await login({ email, password });

          // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

      } catch(err) {

            // Handle error responses from the API
            if( err.response && err.response.data ) console.log(err.response.data);
      }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" ref={emailRef} placeholder="Your email" /><br />
            <input type="password" ref={passwordRef} placeholder="Your password" /><br />
            <button>Submit</button>
        </form>
    )
  }

  function LogoutButton() {

    const logout = useLogout();

    return <button onClick={logout}>Logout</button>

  }
};

export default App;



