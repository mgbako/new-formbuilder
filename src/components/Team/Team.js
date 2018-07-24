import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import Members from "./Members/Members";
import { connect } from "react-redux";
class Team extends Component {
  state = {
    showCreateMember: false
  };

  toggleCreateMember = () => {
    this.setState(prevState => {
      return { showCreateMember: !prevState.showCreateMember };
    });
  };

  render() {
    return (
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
                  onClick={this.toggleCreateMember}
                >
                  <FeatherIcon icon="plus" size="18" className="icon1" />
                  Add User
                </button>
              </div>
              <Members
                members={this.props.loginData.business.accounts}
                showCreateMember={this.state.showCreateMember}
                toggleCreateMember={this.toggleCreateMember}
              />
            </div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.workspaces.loginData
});

export default connect(mapStateToProps)(Team);
