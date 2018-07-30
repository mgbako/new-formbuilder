import ElementTransformer from "../../core/form/ElementTransformer";
import { FormDisplay } from "../../components/Forms/FormDisplay";
import { FormOptions } from "../../components/Forms/FormOptions";
import { FormSetting } from "../../components/Forms/FormSetting";
import ElementBuilder from "../../core/form/ElementBuilder";
import Classes from "./FormBuilder.css";
import { Private } from "../../hoc/Layouts/Private";
import React, { Component } from ".react";

export class FormBuilder extends Component {
  state = {
    formInputs: [
      {
        questionElement: {},
        formElement: {},
        description: "",
        id: ""
      }
    ],
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
    console.log("previewing form");
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
        <div className={Classes.TopMenu}>
          <button
            className="btn btn-secondary float-right"
            type="button"
            onClick={this.previewForm}
          >
            preview
          </button>
          <button
            className="btn btn-info float-right"
            type="button"
            onClick={this.saveForm}
          >
            Save
          </button>
        </div>
        <div className={`row ${Classes.Section}`}>
          <FormOptions
            setFontSize={this.handleFontSizeChange}
            prepareElement={this.setupElement}
            changeFont={this.handleFontChange}
          />
          <FormSetting inputs={this.state.formInputs} />
          <FormDisplay
            showSubmit={this.state.showFormSubmit}
            style={displayStyle}
            inputs={this.state.formInputs}
          />
        </div>
      </Private>
    );
  }
}
