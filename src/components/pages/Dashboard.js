import ImagePlaceholder from "../../img/placeholder-face.png";
import "bootstrap-daterangepicker/daterangepicker.css";
import LeftSideBar from "../UI/sidebars/LeftSideBar";
import Responses from "../Responses/Responses";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchProcessedForms,
  fetchPendingForms,
  fetchNotedForms,
  loginUser
} from "../../actions/workspaceActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRightNav: false,
      name: "",
      email: "",
      phone: "",
      role: "worker"
    };
  }

  rightNavButton = e => {
    this.setState(prevState => {
      return { showRightNav: !prevState.showRightNav };
    });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

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
    let rightNavClasses = this.state.showRightNav ? "active" : "";
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
        {/* manage user modal. */}
        <div
          id="fsModal"
          className="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 id="myModalLabel" className="modal-title">
                  Manage users
                </h4>
                <span className="float-right">
                  <button className="btn close" data-dismiss="modal">
                    &times;
                  </button>
                </span>
              </div>

              <div className="modal-body">
                <div className="space5" />

                <div className="float-right">
                  <button
                    type="button"
                    className="btn bg-secondary btn-md text-light"
                    onClick={this.rightNavButton}
                  >
                    <FeatherIcon icon="plus" size="18" className="icon1" />
                    Add User
                  </button>
                </div>
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Users</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.loginData.business.accounts.map(user => (
                      <tr className="text-left" key={user.email}>
                        <td>
                          <img
                            src={ImagePlaceholder}
                            alt=""
                            className="ImagePlaceholder"
                          />
                          {user.name}
                        </td>
                        <td>
                          <span className="edit">
                            <a>
                              <FeatherIcon
                                icon="trash-2"
                                size="24"
                                className="noteIcon"
                                id={user.email}
                                onClick={this.deleteBusinessUser}
                              />
                            </a>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="space5" />

                <div className={"slider-parent " + rightNavClasses}>
                  <span className="float-right">
                    <button className="btn close" onClick={this.rightNavButton}>
                      &times;
                    </button>
                  </span>
                  <form className="card">
                    <div className="card-body">
                      <h1 className="h3 mb-3 font-weight-normal">Add User</h1>
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

                      <select
                        className="form-control"
                        onChange={e => this.setState({ role: e.target.value })}
                      >
                        <option value="worker">worker</option>
                        <option value="admin">admin</option>
                      </select>

                      <div className="checkbox mb-3" />
                      <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit "
                        onClick={this.addUser}
                        data-dismiss="modal"
                      >
                        {" "}
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="modal-footer" />
            </div>
          </div>
        </div>

        {/* end manage user modal. */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.workspaces.loginData
});

export default connect(
  mapStateToProps,
  { fetchPendingForms, fetchNotedForms, fetchProcessedForms, loginUser }
)(Dashboard);
