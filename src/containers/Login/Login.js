import { Auth } from "../../Hoc/Layouts/Auth";
import React, { Component } from "react";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();

    const details = {
      email: this.state.email,
      password: this.state.password
    };
  };

  render() {
    return (
      <Auth>
        <div className="text-center">
          <form className="form-signin card" onSubmit={this.handleLogin}>
            <div className="card-body">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={this.handleInputChange}
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                data-target="#form-title"
                data-toggle={this.props.error ? "modal" : null}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Auth>
    );
  }
}
