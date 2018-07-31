import { NewWorkspace } from "../../components/Workspaces/NewWorkspace";
import { WorkspaceList } from "../../components/WorkspaceList";
import { Preloader } from "../../components/UI/Preloader";
import { fetchWorkspaces } from "../../store/actions";
import { Private } from "../../hoc/Layouts/Private";
import React, { Component } from "react";
import { connect } from "react-redux";
export class Workspaces extends Component {
  state = {
    newWorkspaceName: ""
  };

  resultToRender = () => {
    return this.props.loading && !this.props.all.length ? (
      <Preloader />
    ) : (
      <WorkspaceList workspaces={this.props.all} />
    );
  };

  handleNewWorkspaceNameChange = e => {
    this.setState({
      newWorkspaceName: e.target.value
    });
  };

  componentDidMount() {
    const business = this.props.business;
    this.props.fetchAll(business.id);
  }

  createNewWorkspace = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Private>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="space5" />
          <h2 className="text-center">Workspace</h2>

          {this.resultToRender()}

          <NewWorkspace
            name={this.state.newWorkspaceName}
            changeName={this.handleNewWorkspaceNameChange}
            createNewWorkspace={this.createNewWorkspace}
          />
          <div className="space10" />
        </div>
      </Private>
    );
  }
}

const mapStateToProps = state => {
  return {
    business: state.user.business,
    loading: state.app.loading,
    all: state.workspace.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: businessId => dispatch(fetchWorkspaces(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspaces);
