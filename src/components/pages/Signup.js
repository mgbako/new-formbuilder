import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    fullname: "",
    name: "",
    email: "",
    phone: "",
    password: ""
  };

  handleNameChange = e => {
    this.setState({ fullname: e.target.value });
  };
  handleBusinessNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/businesses/`,
        {
          name: this.state.name,
          account: {
            name: this.state.fullname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            role: "admin"
          }
        }
      )
      .then(res => {
        sessionStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = sessionStorage.getItem(
          "token"
        );
        axios.defaults.headers.post["Content-Type"] =
          "application/x-www-form-urlencoded";

        this.props.history.push("/dashboard");
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
                id="inputBuisnessName"
                className="form-control"
                placeholder="Business Name"
                required
                autoFocus
                onChange={this.handleBusinessNameChange}
              />

              <input
                type="text"
                id="inputName"
                className="form-control"
                placeholder="Name"
                required
                autoFocus
                onChange={this.handleNameChange}
              />
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                onChange={this.handleEmailChange}
              />
              <input
                type="number"
                id="inputNumber"
                className="form-control"
                placeholder="Phone Number"
                required
                onChange={this.handlePhoneChange}
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                onChange={this.handlePasswordChange}
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
