import { NewForm } from "../../components/Forms/NewForm";
import { Preloader } from "../../components/UI/Preloader";
import { FormList } from "../../components/FormList";
import { Private } from "../../hoc/Layouts/Private";
import { fetchForms } from "../../store/actions";
import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";

export class Forms extends Component {
  state = {
    newForm: { name: "", workspace: "" }
  };

  handleNameChange = e => {
    const newForm = { ...this.state.newForm };
    newForm.name = e.target.value;
    this.setState({ newForm });
  };

  handleWorkspaceSelect = selectNode => {
    if (selectNode) {
      this.newFormWorkspaceSelected = selectNode;
    }
  };

  componentDidMount() {
    const location = this.props.location;
    const { workspace } = queryString.parse(location.search);
    this.props.fetchForms(workspace);
  }

  resultToRender = () =>
    this.props.loading && !this.props.all.length ? (
      <Preloader />
    ) : (
      <FormList forms={this.props.all} />
    );

  createNewForm = () => {
    const form = { ...this.state.newForm };
    form.workspace = this.newFormWorkspaceSelected.value;
    this.props.history.push("/formbuilder", { form });
  };

  render() {
    return (
      <Private>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="space5" />
          <h2 className="text-center">Forms </h2>

          {this.resultToRender()}

          <NewForm
            selectRef={this.selectRef}
            workspaces={this.props.workspaces}
            workspaceSelected={this.state.newForm.workspace}
            formName={this.state.newForm.name}
            createForm={this.createNewForm}
            handleNameChange={this.handleNameChange}
            handleWorkspaceSelect={this.handleWorkspaceSelect}
          />
        </div>
      </Private>
    );
  }
}

const mapStateToProps = state => {
  return {
    workspaces: state.workspace.all,
    loading: state.app.loading,
    all: state.form.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchForms: workspaceId => dispatch(fetchForms(workspaceId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
