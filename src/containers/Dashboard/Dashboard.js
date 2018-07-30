import Responses from "../../components/Responses/Responses";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Private } from "../../hoc/Layouts/Private";
import { SwypPartnerApi } from "../../core/api";
import Team from "../../components/Team/Team";

import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  addUser = e => {
    e.preventDefault();

    SwypPartnerApi.post(`businesses/adduser`, {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.role,
      origin: window.location.origin + "/reset_password",
      business: this.props.loginData.business.id
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  deleteBusinessUser = e => {
    e.preventDefault();
    this.setState({ email: e.target.id });
    SwypPartnerApi.post(`hbusinesses/deleteuser`, {
      email: this.state.email
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  componentDidMount() {
    this.props.fetchNotedForms();
    this.props.fetchPendingForms();
    this.props.fetchProcessedForms();
  }

  render() {
    return (
      <Private>
        <div className="row">
          <main id="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="space5" />
            <Responses />

            <div className="space10" />
          </main>
        </div>
        <Team />
      </Private>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Dashboard);