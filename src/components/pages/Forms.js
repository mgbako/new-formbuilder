import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchWorkspaces,
  getFormIdAndTitle,
  fetchWorkspaceForm,
  loginUser
} from "../../actions/workspaceActions";
import PropTypes from "prop-types";

class Forms extends Component {
  constructor(props) {
    super();
    this.state = {
      workspaceForms: [],
      name: "",
      password: "",
      workspaceName: "",
      workspaceId: "",
      formTitle: ""
    };
    this.getWorkspaceForms = this.getWorkspaceForms.bind(this);
    this.onChangeFunc = this.onChangeFunc.bind(this);
  }

  onChangeFunc(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  disableForm = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to disable this form?")) {
      axios.put(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/forms/disable/${
          e.target.id
        }`
      );
    }
  };

  deleteForm = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this form?")) {
      axios.delete(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/forms/${
          e.target.id
        }`
      );
    }
  };

  getWorkspaceForms(e) {
    let workspaceName = e.target.value;
    let workspaceId = e.target.id;
    this.setState({ workspaceName: workspaceName, workspaceId: workspaceId });

    this.props.fetchWorkspaceForm(this.state.workspaceId);
  }

  deleteWorkspace = e => {
    e.preventDefault();
    if (this.state.workspaceName) {
      if (window.confirm("Are you sure you want to delete this Workspace?")) {
        axios
          .delete(
            `https://swyp-business-backend-service.herokuapp.com/api/v1/workspaces/${
              this.state.workspaceId
            }`
          )
          .then(res => {
            let workspaceName = "";
            this.setState({ workspaceName });
          });
      }
    } else {
      alert("no workspace selected");
    }
  };

  addWorkspace = e => {
    this.setState({ name: e.target.value });
  };

  submitWorkspace = e => {
    e.preventDefault();

    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/workspaces`,
        {
          name: this.state.name
        }
      )
      .then(res => {
        console.log(res);
      });
  };

  newForm = e => {
    if (this.menu.value && this.state.formTitle) {
      //alert("hi"+ " " +this.menu.value + " " +this.state.formTitle)
      const createFormData = {
        id: this.menu.value,
        title: this.state.formTitle
      };

      this.props.getFormIdAndTitle(createFormData);
      this.props.history.push("/create");
    } else {
      alert("please input required fields");
    }
  };
  componentDidMount() {
    this.props.fetchWorkspaces(this.props.loginData.business.id);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <h5 className="font-weight-bold Header-logo text-center">
                <Link to="/dashboard">SWYP</Link>
              </h5>

              <div className="sidebar-sticky workstation">
                <p>
                  {" "}
                  Workspaces<span className="float-right">
                    {" "}
                    <FeatherIcon
                      icon="plus"
                      size="18"
                      className="workstation-icon"
                      data-toggle="modal"
                      data-target="#newWorkstation"
                    />{" "}
                    <FeatherIcon
                      icon="search"
                      size="18"
                      className="workstation-icon"
                    />
                  </span>
                </p>
                <div className="space1" />

                <div className="workspace-panel">
                  {this.props.workspaces.map(data => (
                    <input
                      type="text"
                      spellcheck="false"
                      id={data.id}
                      value={data.name}
                      onClick={this.getWorkspaceForms}
                      readonly
                    />
                  ))}
                </div>
              </div>
            </nav>

            <main id="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="space1" />
              <h3>
                {this.state.workspaceName}{" "}
                <span className="float-right">
                  {" "}
                  <button
                    type="button"
                    className="btn bg-secondary btn-md text-light"
                    data-toggle="modal"
                    data-target="#form-title"
                  >
                    <FeatherIcon icon="plus" size="18" className="icon1" />
                    New Form
                  </button>
                </span>
              </h3>
              <div>
                <FeatherIcon
                  icon="trash-2"
                  size="24"
                  className="writeIcon"
                  onClick={this.deleteWorkspace}
                />
              </div>

              <div className="space5" />

              <div className="row">
                {this.props.workspaceForms.map(form => (
                  <div className="col-sm-2 workspaceForm shadow">
                    <div className="edit">
                      <a href="#">
                        <FeatherIcon
                          icon="slash"
                          size="24"
                          className="noteIcon"
                          id={form.id}
                          onClick={this.disableForm}
                        />
                      </a>{" "}
                      <a href="#">
                        <FeatherIcon
                          icon="trash-2"
                          size="24"
                          className="writeIcon"
                          id={form.id}
                          onClick={this.deleteForm}
                        />
                      </a>
                    </div>

                    <div className="vertical-align">
                      <p>{form.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>

        {/* add workstation modal starts */}
        <div className="modal fade" id="newWorkstation">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add a new Workspace</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <form>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Name your new workstation"
                    required
                    autofocus
                    onChange={this.addWorkspace}
                  />
                  <div className="space2" />
                  <button
                    className="btn btn-lg btn-secondary float-right"
                    type="submit"
                    onClick={this.submitWorkspace}
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* add workstation modal ends */}

        {/* add form modal starts */}
        <div className="modal fade" id="form-title">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <label for="sel1">Select Workspace:</label>
                    <select
                      class="form-control"
                      ref={input => (this.menu = input)}
                    >
                      {this.props.workspaces.map(data => (
                        <option value={data.id}>{data.name}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="formTitle"
                    className="form-control"
                    placeholder="Form title"
                    required
                    onChange={this.onChangeFunc}
                  />
                  <div className="space2" />
                  <button
                    className="btn btn-lg btn-secondary float-right"
                    type="submit"
                    onClick={this.newForm}
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* add form modal ends */}
      </div>
    );
  }
}

Forms.propTypes = {
  fetchWorkspaces: PropTypes.func.isRequired,
  workspaces: PropTypes.array.isRequired,
  getFormIdAndTitle: PropTypes.func.isRequired,
  workspaceForms: PropTypes.array.isRequired,
  fetchWorkspaceForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  workspaces: state.workspaces.items,
  workspaceForms: state.workspaces.workspaceForms,
  loginData: state.workspaces.loginData
});

export default connect(
  mapStateToProps,
  { fetchWorkspaces, getFormIdAndTitle, fetchWorkspaceForm, loginUser }
)(Forms);
