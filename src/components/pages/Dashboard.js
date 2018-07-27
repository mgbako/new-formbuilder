import "bootstrap-daterangepicker/daterangepicker.css";
import LeftSideBar from "../UI/sidebars/LeftSideBar";
import Responses from "../Responses/Responses";
import React, { Component } from "react";
import { connect } from "react-redux";
import Team from "../Team/Team";
import axios from "axios";
import {
  fetchProcessedForms,
  fetchPendingForms,
  fetchNotedForms,
  loginUser
} from "../../actions/workspaceActions";

class Dashboard extends Component {
  addUser = e => {
    e.preventDefault();

    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/businesses/adduser`,
        {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          role: this.state.role,
          origin: window.location.origin + "/reset_password",
          business: this.props.loginData.business.id
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  deleteBusinessUser = e => {
    e.preventDefault();
    this.setState({ email: e.target.id });
    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/businesses/deleteuser`,
        {
          email: this.state.email
        }
      )
      .then(res => {
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
      <div>
        <div className="container-fluid">
          <div className="row">
            <LeftSideBar />
            <main id="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="space5" />
              <Responses />

              <div className="space10" />
            </main>
          </div>
        </div>
        <Team />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { fetchPendingForms, fetchNotedForms, fetchProcessedForms, loginUser }
)(Dashboard);
