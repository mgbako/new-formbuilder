import React, { Component } from "react";
import axios from "axios";

class Request_Password_Reset_Token extends Component {
  state = {
    email: "",
    message: ""
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/businesses/requestpasswordrest`,
        {
          origin: window.location.origin,
          email: this.state.email
        }
      )
      .then(res => {
        console.log(res.data.message);
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

export default Request_Password_Reset_Token;
