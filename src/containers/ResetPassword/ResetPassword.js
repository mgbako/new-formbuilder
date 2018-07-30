import { SwypPartnerApi } from "../../core/api";
import React, { Component } from "react";
import Classes from "./ResetPassword.css";

class ResetPassword extends Component {
  state = {
    password: ""
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    SwypPartnerApi.post(`businesses/resetpassword`, {
      password: this.state.password,
      email: "",
      token: ""
    }).then(res => {
      this.setState({ message: res.data.message });
    });
  };

  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />
        <form
          className={`card ${Classes.FormSignin}`}
          onSubmit={this.handleSubmit}
        >
          <div className="card-body">
            <h1 className="h3 mb-3 font-weight-normal">
              Please choose your new password:
            </h1>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="New Password"
              required
              autoFocus
              onChange={this.handlePasswordChange}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </div>
          <p>{this.state.message}</p>
        </form>
      </main>
    );
  }
}

export default ResetPassword;
