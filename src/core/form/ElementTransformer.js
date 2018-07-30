import React from "react";

export default (input, inputTitle) => {
  const elementProperties = { ...input.formElement.props };
  const typeOfElement = input.formElement.type;
  let newElement = {};

  switch (typeOfElement) {
    case "input":
      elementProperties.name = inputTitle.toLowerCase();
      newElement = <input {...elementProperties} />;
      break;
    case "textarea":
      elementProperties.name = inputTitle.toLowerCase();
      newElement = <textarea {...elementProperties} />;
      break;

    default:
      newElement = input.formElement;
  }
  input.label = inputTitle;
  input.displayInputElement = newElement;
  return input;
};
