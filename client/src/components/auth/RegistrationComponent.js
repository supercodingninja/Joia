// Ref. https://www.youtube.com/watch?v=QoLUB0QkUaE //
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./home";
import Dashboard from "./Dashboard";

export default class Registration extends Component {
  constructor(props) {
    super(props);
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    handleSubmit(e) {
      console.log("Form Submitted");
      e.preventDefault();
    }

    this.render() {
      return (<div>
        <form onSubmit={}
      </div>)
    }
  }

  checkRegistrationStatus() {
    axios
      .get("http://localhost:4000/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check Registration error", error);
      });
  }

  componentDidMount() {
    this.checkRegistrationStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleRegistration(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleRegistration={this.handleRegistration}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}