import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    logoUrl: ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleLogoChange = e => {
    this.setState({ logoUrl: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `http://swyp-business-backend-service.herokuapp.com/api/v1/businesses/`,
        {
          logoUrl: this.state.logoUrl,
          name: this.state.name,
          account: ""
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />
        <div className="">
          <form className="form-signin card" onSubmit={this.handleSubmit}>
            <div className="card-body">
              <h1 className="h3 mb-3 font-weight-normal">
                Sign up for a Business account
              </h1>
              <input
                type="text"
                id="inputEmail"
                className="form-control"
                placeholder="Business Name"
                required
                autoFocus
                onChange={this.handleNameChange}
              />
              <input
                type="url"
                id="inputUrl"
                className="form-control"
                placeholder="Business Logo Url"
                required
                onChange={this.handleLogoChange}
              />

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Signup;
