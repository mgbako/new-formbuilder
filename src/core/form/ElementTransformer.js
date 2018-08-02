import React from "react";

export default (input, inputTitle) => {
  const elementProperties = { ...input.formElement.props };
  const typeOfElement = input.formElement.type;
  let newElement = {};

  switch (typeOfElement) {
    case "input":
      newElement = (
        <input {...elementProperties} name={inputTitle.toLowerCase()} />
      );
      break;
    case "textarea":
      newElement = (
        <textarea {...elementProperties} name={inputTitle.toLowerCase()} />
      );
      break;

    default:
      newElement = input.formElement;
  }
  input.description = inputTitle;
  input.formElement = newElement;
  return input;
};
