import { NewForm } from "../../components/Forms/NewForm";
import { Private } from "../../hoc/Layouts/Private";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import Classes from "./Forms.css";

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
          <FeatherIcon icon="plus" size="18" className={Classes.Icon} />
          New Form
        </button>
        <div className={`row ${Classes.Section}`}>
          <div className={`shadow ${Classes.BankForm}`}>
            <div className={Classes.VerticalAlign}> Dormant Account</div>
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
