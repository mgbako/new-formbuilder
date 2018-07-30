import { registerBusiness } from "../../store/actions";
import { Auth } from "../../hoc/Layouts/Auth";
import React, { Component } from "react";
import { connect } from "react-redux";
import Classes from "./Signup.css";

class Signup extends Component {
  state = {
    businessname: "",
    fullname: "",
    password: "",
    email: "",
    phone: ""
  };

  handleFullnameChange = e => {
    this.setState({ fullname: e.target.value });
  };
  handleBusinessNameChange = e => {
    this.setState({ businessname: e.target.value });
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

  handleRegistration = e => {
    e.preventDefault();
    const details = {
      name: this.state.businessname,
      account: {
        name: this.state.fullname,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        role: "admin"
      }
    };
    this.props.register(details);
  };

  render() {
    return (
      <Auth>
        <form
          className={`card ${Classes.FormSignup}`}
          onSubmit={this.handleRegistration}
        >
          <h1 className="h3 mb-3 font-weight-normal text-center ">
            Sign up for a Business account
          </h1>
          <div className=" mb-5">
            <div className={Classes.SignupTop}>
              <h5>Business Details</h5>
              <input
                type="text"
                id="inputBuisnessName"
                className="form-control mb-3"
                placeholder="Business Name"
                onChange={this.handleBusinessNameChange}
                required
              />
            </div>

            <div className={Classes.SignupBottom}>
              <h5>Personal Details</h5>
              <input
                type="text"
                id="inputFullname"
                className="form-control"
                placeholder="Full name"
                onChange={this.handleFullnameChange}
                required
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
            </div>
          </div>

          <div className="space100" />

          <button
            className={`btn btn-lg btn-primary btn-block ${Classes.Signupbtn}`}
            type="submit"
          >
            Next
          </button>
        </form>
      </Auth>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: details => dispatch(registerBusiness(details))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
