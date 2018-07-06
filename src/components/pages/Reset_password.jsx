import React, { Component } from 'react';
import axios from 'axios';

class Reset_password extends Component {
  state = {
    password: ''
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `http://swyp-business-backend-service.herokuapp.com/api/v1/businesses/resetpassword`,
        {
          password: this.state.password,
          email: '',
          token: ''
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

export default Reset_password;
