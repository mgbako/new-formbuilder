import { stopNetworkRequest } from "../../store/actions";
import { Preloader } from "../../components/UI/Preloader";
import React, { Component } from "react";
import { connect } from "react-redux";

class Loader extends Component {
  render() {
    return this.props.showLoader ? (
      <Preloader click={this.props.stopLoader} show={this.props.showLoader} />
    ) : null;
  }
}

const mapStateToPros = state => {
  return {
    showLoader: state.app.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stopLoader: () => dispatch(stopNetworkRequest())
  };
};

export const NetworkLoader = connect(
  mapStateToPros,
  mapDispatchToProps
)(Loader);
