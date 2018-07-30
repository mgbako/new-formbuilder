import { SwypPartnerApi } from "../../core/api";
import React, { Component } from "react";

class ForgotPassword extends Component {
  state = {
    email: "",
    message: ""
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    SwypPartnerApi.post(`businesses/requestpasswordreset`, {
      origin: window.location.origin,
      email: this.state.email
    }).then(res => {
      this.setState({ message: res.data.message });
    });
  };

  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />

        <form className="form-signin card" onSubmit={this.handleSubmit}>
          <div className="card-body">
            <p>
              Please fill out your email. A link to reset password will be sent
              there.
            </p>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="email"
              required
              autoFocus
              onChange={this.handleEmailChange}
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

export default ForgotPassword;
