import React, { Component } from "react";
import { connect } from "react-redux";

class Preview extends Component {
  componentDidMount() {
    console.log(this.props.form[0]);
  }
  render() {
    return (
      <div className="container" style={this.props.form.displayStyle}>
        <form id="preview">
          {this.props.form.map(input => (
            <div key={input.id}>
              <div> {input.description}</div>

              <div> {input.formElement}</div>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form.newForm
});

export default connect(mapStateToProps)(Preview);
