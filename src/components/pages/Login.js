import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/workspaceActions";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const loginDetails = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(loginDetails);
  };

  componentDidUpdate(props) {
    if (sessionStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] = sessionStorage.getItem(
        "token"
      );
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />
        <div className="text-center">
          <form className="form-signin card" onSubmit={this.handleSubmit}>
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
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginData: state.workspaces.loginData
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
