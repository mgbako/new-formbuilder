import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { formPreviewData } from "../../actions/workspaceActions";

class Preview extends Component {
  render() {
    return (
      <div className="container" style={this.props.formElement.displayStyle}>
        <form id="preview">
          {this.props.formElement.inputs.map(input => (
            <div>
              <div> {input.label}</div>

              <div> {input.displayInputElement}</div>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

Preview.propTypes = {
  formPreviewData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  formElement: state.workspaces.formElement
});

export default connect(
  mapStateToProps,
  { formPreviewData }
)(Preview);
