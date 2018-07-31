import Responses from "../../components/Responses/Responses";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Private } from "../../hoc/Layouts/Private";
import { all } from "../../store/actions";
import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchAllResponse(this.props.business.id);
  }

  render() {
    return (
      <Private>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="space5" />
          <Responses
            pending={this.props.pendingResponse}
            processed={this.props.processedResponse}
            noted={this.props.notedResponse}
          />
          <div className="space10" />
        </div>
      </Private>
    );
  }
}

const mapStateToProps = state => {
  return {
    processedResponse: state.response.processed,
    pendingResponse: state.response.pending,
    notedResponse: state.response.noted,
    business: state.user.business
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllResponse: businessId => dispatch(all(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
