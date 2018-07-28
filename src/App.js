import Request_Password_Reset_Token from "./components/pages/RequestPasswordResetToken";
import Reset_password from "./components/pages/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import Overview from "./components/pages/Overview";
import ScrollToTop from "./components/ScrollToTop";
import Preview from "./components/pages/Preview";
import Create from "./components/pages/Create";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Forms from "./components/pages/Forms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

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
    return (
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
    );
  }
}
export default App;
