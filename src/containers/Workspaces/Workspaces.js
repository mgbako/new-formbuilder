import { NewWorkspace } from "../../components/Workspaces/NewWorkspace";
import { Private } from "../../hoc/Layouts/Private";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import Classes from "./Workspaces.css";

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
          <FeatherIcon icon="plus" size="18" className={Classes.Icon} />
          New Workspace
        </button>
        <div className={`row ${Classes.Container}`}>
          <div className={`shadow ${Classes.FormCategory}`}>
            <div className={Classes.VerticalAlign}>Accounts (Corporate)</div>
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
