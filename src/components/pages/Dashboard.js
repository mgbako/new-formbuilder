import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import moment from "moment";
import "bootstrap-daterangepicker/daterangepicker.css";
import { connect } from "react-redux";
import {
  fetchPendingForms,
  fetchNotedForms,
  fetchProcessedForms,
  loginUser
} from "../../actions/workspaceActions";
import ImagePlaceholder from "../../img/placeholder-face.png";
import { Link } from "react-router-dom";
import Tab from "./Tab";
import Tabs from "./Tabs";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRightNav: false,
      note: "",
      formId: "",
      name: "",
      email: "",
      phone: "",
      role: "worker"
    };

    this.rightNavButton = this.rightNavButton.bind(this);
    this.getFormId = this.getFormId.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  getFormId = e => {
    this.setState({ formId: e.target.id });
  };

  handleNoteChange = e => {
    this.setState({ note: e.target.value });
  };

  getNote = e => {
    e.preventDefault();
    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/responses/addnote/${
          this.state.formId
        }`,
        {
          note: this.state.note
        }
      )
      .then(res => {});
  };

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
    if (!this.props.pending.result) {
      return <div />;
    }

    let rightNavClasses = this.state.showRightNav ? "active" : "";
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" href="#">
                      <FeatherIcon icon="home" size="24" className="icon" />
                      Dashboard <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <span
                      className="nav-link"
                      href="#"
                      data-toggle="modal"
                      data-target="#fsModal"
                    >
                      <FeatherIcon icon="users" size="24" className="icon" />
                      Manage Users
                    </span>
                  </li>
                  <li className="nav-item">
                    <Link to="/overview" className="nav-link">
                      <FeatherIcon
                        icon="bar-chart-2"
                        size="24"
                        className="icon"
                      />
                      Overview
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="forms" className="nav-link">
                      <FeatherIcon
                        icon="file-text"
                        size="24"
                        className="icon"
                      />
                      Forms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <FeatherIcon
                        icon="file-text"
                        size="24"
                        className="icon"
                      />
                      Templates
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main id="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Tabs>
                <Tab iconClassName={"Unread"} linkClassName={"custom-link"}>
                  <div className="table-responsive">
                    <table className="table table-sm shadow-sm">
                      <thead>
                        <tr>
                          <th>Forms</th>
                          <th>Respondents</th>
                          <th>Date Recieved</th>
                          <th>Date Processed</th>
                          <th>Procesed By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.pending.result.map(pending => (
                          <tr>
                            <td>{pending.form.name}</td>
                            <td>
                              {pending.respondant.lastname +
                                " " +
                                pending.respondant.firstname}{" "}
                            </td>
                            <td> {moment(pending.createdAt).format("ll")}</td>
                            <td />
                            <td />
                            <div className="edit">
                              <a href="#" onClick={this.getFormId}>
                                <span
                                  id={pending.form.id}
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  #
                                </span>
                              </a>{" "}
                              <a href="#">
                                <FeatherIcon
                                  icon="file"
                                  size="24"
                                  className="noteIcon"
                                />
                              </a>
                            </div>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab iconClassName={"Pending"} linkClassName={"custom-link"}>
                  <div className="table-responsive">
                    <table className="table table-sm shadow-sm">
                      <thead>
                        <tr>
                          <th>Forms</th>
                          <th>Respondents</th>
                          <th>Date Recieved</th>
                          <th>Date Processed</th>
                          <th>Procesed By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.noted.result.map(noted => (
                          <tr>
                            <td>{noted.form.name}</td>
                            <td>
                              {noted.respondant.lastname +
                                " " +
                                noted.respondant.firstname}{" "}
                            </td>
                            <td> {moment(noted.createdAt).format("ll")}</td>
                            <td />
                            <td />
                            <div className="edit">
                              <a href="#" onClick={this.getFormId}>
                                <span
                                  id={noted.form.id}
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  #
                                </span>
                              </a>{" "}
                              <a href="#">
                                <FeatherIcon
                                  icon="file"
                                  size="24"
                                  className="noteIcon"
                                />
                              </a>
                            </div>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>

                <Tab iconClassName={"Processed"} linkClassName={"custom-link"}>
                  <div className="table-responsive">
                    <table className="table table-sm shadow-sm">
                      <thead>
                        <tr>
                          <th>Forms</th>
                          <th>Respondents</th>
                          <th>Date Recieved</th>
                          <th>Date Processed</th>
                          <th>Procesed By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.processed.result.map(processed => (
                          <tr>
                            <td>{processed.form.name}</td>
                            <td>
                              {processed.respondant.lastname +
                                " " +
                                processed.respondant.firstname}{" "}
                            </td>
                            <td> {moment(processed.createdAt).format("ll")}</td>
                            <td />
                            <td />
                            <div className="edit">
                              <a href="#" onClick={this.getFormId}>
                                <span
                                  id={processed.form.id}
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  #
                                </span>
                              </a>{" "}
                              <a href="#">
                                <FeatherIcon
                                  icon="file"
                                  size="24"
                                  className="noteIcon"
                                />
                              </a>
                            </div>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>{" "}
                </Tab>
              </Tabs>

              <div className="space5" />

              {/* whenClicked is a property not an event, per se. */}

              <div className="space10" />
            </main>
            {/* add note modal. */}

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Note
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <textarea
                      name="note"
                      className="form-control"
                      placeholder="Type your answer here"
                      onChange={this.handleNoteChange.bind(this)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={this.getNote}
                      data-dismiss="modal"
                    >
                      Save note
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of  add note modal. */}

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
                      <tr className="text-left">
                        <td>
                          <img
                            src={ImagePlaceholder}
                            alt=""
                            className="ImagePlaceholder"
                          />
                          {user.name}
                        </td>
                        <div className="edit">
                          <a href="#">
                            <FeatherIcon
                              icon="trash-2"
                              size="24"
                              className="noteIcon"
                              id={user.email}
                              onClick={this.deleteBusinessUser}
                            />
                          </a>
                        </div>
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
  pending: state.workspaces.formResponsePending,
  noted: state.workspaces.formResponseNoted,
  processed: state.workspaces.formResponseProcessed,
  loginData: state.workspaces.loginData
});

export default connect(
  mapStateToProps,
  { fetchPendingForms, fetchNotedForms, fetchProcessedForms, loginUser }
)(Dashboard);
