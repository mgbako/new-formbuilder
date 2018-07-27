import uuid4 from "uuid4";
import React from "react";

export default class FormBuilder {
  static build(type, funcToBind) {
    let formElement = {};

    switch (type) {
      case "shortText":
        formElement = makeFormInput("text");
        break;

      case "title":
        formElement = makeFormInput("h3");
        break;

      case "longText":
        formElement = makeFormInput("h3");
        break;

      case "email":
        formElement = makeFormInput("email");
        break;

      case "number":
        formElement = makeFormInput("number");
        break;

      case "bvn":
        formElement = makeFormInput("number");
        break;

      case "pasport":
        formElement = makeFormInput("file", "pasport");
        break;

      case "signature":
        formElement = makeFormInput("file", "signature");
        break;
      default:
        break;
    }
    const id = uuid4();
    const description = "";
    const labelElement = makeLabel(funcToBind, id);
    return { labelElement, formElement, id, description };
  }
}

const makeLabel = (funcToBind, id) => (
  <input
    type="text"
    placeholder="Ask your question"
    id={id}
    className="InputDiv form-control"
    onChange={funcToBind}
  />
);

const makeFormInput = (type, name) => {
  let placeholder = "type your answer here";
  if (type === "number") {
    placeholder = "+234 080 0000 0000";
  }
  if (type === "h3") {
    return <h3 />;
  }

  if (type === "textarea") {
    return (
      <textarea className="form-control" placeholder="Type your answer here" />
    );
  }

  if (type === "file") {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control-file"
        accept="image/*"
      />
    );
  }
  return (
    <input type={type} placeholder={placeholder} className=" form-control" />
  );
};
