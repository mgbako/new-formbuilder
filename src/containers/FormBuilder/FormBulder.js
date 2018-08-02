import { preserveNewForm, removeFormElement } from "../../store/actions";
import ElementTransformer from "../../core/form/ElementTransformer";
import { FormControls } from "../../components/Forms/FormControls";
import { FormDisplay } from "../../components/Forms/FormDisplay";
import { FormOptions } from "../../components/Forms/FormOptions";
import { FormSetting } from "../../components/Forms/FormSetting";
import ElementBuilder from "../../core/form/ElementBuilder";
import { Private } from "../../hoc/Layouts/Private";
import React, { Component } from "react";
import classes from "./FormBuilder.css";
import { connect } from "react-redux";

class FormBuilder extends Component {
  state = {
    formInputs: [],
    activeFont: "Open Sans",
    showFormSubmit: false,
    font_size: "13px"
  };

  handleFontSizeChange = e => {
    this.setState({ font_size: e.target.value + "px" });
  };

  handleFontChange = family => {
    this.setState({ activeFont: family });
  };

  collectQuestion = e => {
    const id = e.target.id;

    const inputs = this.state.formInputs;
    const inputIndex = inputs.findIndex(input => input.id === id);

    const inputToTransform = { ...inputs[inputIndex] };
    const transformedInput = ElementTransformer(
      inputToTransform,
      e.target.value
    );
    console.log(transformedInput);
    inputs[inputIndex] = transformedInput;
    this.setState({ formInputs: inputs });
  };

  setupElement = type => {
    const { id, describe, questionElement, formElement } = ElementBuilder.build(
      type,
      this.collectQuestion
    );
    const inputs = [...this.state.formInputs];
    const input = { id, describe, questionElement, formElement };
    inputs.push(input);
    this.setState({ formInputs: inputs });
  };

  previewForm = e => {
    this.props.preserveForm(this.state.formInputs);
    this.props.history.push("/preview");
  };

  createForm = () => {
    console.log("saving forms");
  };

  render() {
    const displayStyle = {
      fontSize: this.state.font_size,
      fontFamily: this.state.activeFont
    };
    return (
      <Private>
        <FormControls create={this.createForm} preview={this.previewForm} />
        <div>
          <div className={` ${classes.FormBuilder}`}>
            <FormOptions
              setFontSize={this.handleFontSizeChange}
              prepareElement={this.setupElement}
              changeFont={this.handleFontChange}
            />
            <FormSetting inputs={this.state.formInputs} />
            <FormDisplay
              style={displayStyle}
              showSubmit={this.state.showFormSubmit}
              inputs={this.state.formInputs}
            />
          </div>
        </div>
      </Private>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    preserveForm: form => dispatch(preserveNewForm(form))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(FormBuilder);
