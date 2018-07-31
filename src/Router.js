import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import FormBuilder from "./containers/FormBuilder/FormBulder";
import Workspaces from "./containers/Workspaces/Workspaces";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import Overview from "./containers/Overview/Overview";
import Preview from "./containers/Preview/Preview";
import Signup from "./containers/Signup/Signup";
import Forms from "./containers/Forms/Forms";
import Login from "./containers/Login/Login";
import { SwypPartnerApi } from "./core/api";
import Team from "./containers/Team/Team";
import store from "./store";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const state = store.getState();
      const token = state.user.token;
      SwypPartnerApi.defaults.headers.common["Authorization"] = token;
      return token ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

export default () => (
  <Switch>
    <Route exact path="/forgetpassword" component={ForgotPassword} />
    <PrivateRoute exact path="/formbuilder" component={FormBuilder} />
    <PrivateRoute exact path="/workspaces" component={Workspaces} />
    <Route exact path="/resetpassword" component={ResetPassword} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/overview" component={Overview} />
    <PrivateRoute exact path="/preview" component={Preview} />
    <PrivateRoute exact path="/forms/" component={Forms} />
    <PrivateRoute exact path="/teams" component={Team} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Login} />
  </Switch>
);
