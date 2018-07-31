import Members from "../../components/Members/Members";
import { Private } from "../../hoc/Layouts/Private";
import React, { Component } from "react";
import { connect } from "react-redux";
class Team extends Component {
  state = {
    showCreateMember: false,
    newMember: {
      email: "",
      name: "",
      role: "worker"
    }
  };

  setNewUserDetails = (key, value) => {
    const newMember = { ...this.state.newMember };
    newMember[key] = value;
    this.setState({ newMember });
  };

  createMember = () => {
    if (this.state.newMember.email !== "" || this.state.newMember.name !== "") {
      const { email, name, phone, role } = this.state.newMember;
      const user = {
        email,
        name,
        phone,
        role
      };
      console.log(user);
    }
  };

  toggleCreateMember = () => {
    this.setState(prevState => {
      return { showCreateMember: !prevState.showCreateMember };
    });
  };

  render() {
    return (
      <Private>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="space5" />
          <Members
            members={this.props.business.accounts}
            showCreateMember={this.state.showCreateMember}
            toggleCreateMember={this.toggleCreateMember}
            setNewMemberDetail={this.setNewUserDetails}
            createMember={this.createMember}
          />
          <div className="space10" />
        </div>
      </Private>
    );
  }
}

const mapStateToProps = state => ({
  business: state.user.business
});

export default connect(mapStateToProps)(Team);
