import { NewForm } from "../../components/Forms/NewForm";
import { Private } from "../../hoc/Layouts/Private";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    newForm: { name: "", workspace: "" }
  };

  handleNameChange = e => {
    const newForm = { ...this.state.newForm };
    newForm.name = e.target.value;
    this.setState({ newForm });
  };

  handleWorkspaceSelect = e => {
    const newForm = { ...this.state.newForm };
    newForm.workspace = e.target.value;
    this.setState({ newForm });
  };

  createForm = () => {};

  render() {
    return (
      <Private>
        <h2 className="text-center">Accounts </h2>
        <button
          type="button"
          className="btn bg-secondary btn-md text-light"
          data-toggle="modal"
          data-target="#AddForm"
        >
          <FeatherIcon icon="plus" size="18" className="icon1" />
          New Form
        </button>
        <div className="workspace-section1 row">
          <div className="bank-form shadow">
            <div className="vertical-align "> Dormant Account</div>
          </div>
        </div>
        <NewForm
          workspaces={this.props.workspaces}
          workspaceSelected={this.state.newForm.workspace}
          formName={this.state.newForm.name}
          createForm={this.createNewForm}
          handleNameChange={this.handleNameChange}
          handleWorkspaceSelect={this.handleWorkspaceSelect}
        />
      </Private>
    );
  }
}