import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Create from "./components/pages/Create";
import Preview from "./components/pages/Preview";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Forms from "./components/pages/Forms";
import Overview from "./components/pages/Overview";
import Request_Password_Reset_Token from "./components/pages/RequestPasswordResetToken";
import Reset_password from "./components/pages/ResetPassword";
import ScrollToTop from "./components/ScrollToTop";

import store from "./store";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem("token") !== (undefined || null) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class App extends Component {
  render() {
    let token = sessionStorage.getItem("token");
    console.log(token);
    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Header />

              <ScrollToTop>
                <Switch>
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/" component={Login} />
                  <Route
                    exact
                    path="/request_password_reset_token"
                    component={Request_Password_Reset_Token}
                  />
                  <Route
                    exact
                    path="/reset_password"
                    component={Reset_password}
                  />
                  <PrivateRoute exact path="/create" component={Create} />
                  <PrivateRoute exact path="/preview" component={Preview} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/forms" component={Forms} />
                  <PrivateRoute exact path="/overview" component={Overview} />
                </Switch>
              </ScrollToTop>

              <Footer />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
