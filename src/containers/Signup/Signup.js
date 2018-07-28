import { Auth } from "../../Hoc/Layouts/Auth";
import React, { Component } from "react";
export default class Signup extends Component {
  state = {
    businessname: "",
    fullname: "",
    password: "",
    email: "",
    phone: ""
  };

  handleNameChange = e => {
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
  };

  render() {
    return (
      <Auth>
        <div />
      </Auth>
    );
  }
}
