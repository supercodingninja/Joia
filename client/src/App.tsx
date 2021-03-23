import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
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


// Ref. https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example //
// NEED TO THINK ABOUT. //
// import { history } from '@/_helpers';
// import { authenticationService } from '@/_services';
// import { PrivateRoute } from '@/_components';


// Including the useAuthTokenStore. //
// Including the useAuthTokenStore hook will allow your app to reauthenticate already logged in users if they refresh the page, or leave and return to the application. //
// The best place for this is inside your primary App component. //
class App extends React.Component {
  state: { currentUser: any; };

  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();

  /** Rest of your App component code here */
  // Reference https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example; and https://www.alibabacloud.com/blog/how-to-implement-authentication-in-reactjs-using-jwt_595820 //
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }
  setState(arg0: { currentUser: any; }) {
    throw new Error("Method not implemented.");
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    
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
};

export default App;



