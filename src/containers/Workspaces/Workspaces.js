import { NewWorkspace } from "../../components/Workspaces/NewWorkspace";
import { Private } from "../../hoc/Layouts/Private";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";

export default class Workspaces extends Component {
  state = {
    newWorkspaceName: ""
  };

  handleNewWorkspaceNameChange = e => {
    this.setState({
      newWorkspaceName: e.target.value
    });
  };

  createNewWorkspace = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Private>
        <h2 className="text-center">Workspace</h2>

        <button
          type="button"
          className="btn bg-secondary btn-md text-light"
          data-toggle="modal"
          data-target="#newWorkspace"
        >
          <FeatherIcon icon="plus" size="18" className="icon1" />
          New Workspace
        </button>
        <div className="workspace-section1 row">
          <div className="form-category shadow">
            <div className="vertical-align">Accounts (Corporate)</div>
          </div>
        </div>

        <NewWorkspace
          name={this.state.newWorkspaceName}
          changeName={this.handleNewWorkspaceNameChange}
          createNewWorkspace={this.createNewWorkspace}
        />
      </Private>
    );
  }
}
