import { NetworkLoader } from "../../../containers/NetworkLoader";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import Classes from "./Auth.css";
class AuthLayout extends Component {
  render() {
    if (this.props.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <main id="main" className={`container ${Classes.SignupWrapper}`}>
        {this.props.children}
        <NetworkLoader />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  };
};

export const Auth = connect(mapStateToProps)(AuthLayout);
