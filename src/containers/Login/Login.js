import { loginUser } from "../../store/actions";
import { Auth } from "../../hoc/Layouts/Auth";

import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
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
    this.props.login(details);
  };

  render() {
    return (
      <Auth>
        <form className="card" onSubmit={this.handleLogin}>
          <div className="card-body">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
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
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </Auth>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: details => dispatch(loginUser(details))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
