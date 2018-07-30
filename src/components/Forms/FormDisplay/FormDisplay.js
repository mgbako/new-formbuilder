import React from "react";

export const FormDisplay = props => (
  <div className="col-sm-5">
    <div className="collection">
      <form id="form" style={props.style}>
        {props.input.map(input => (
          <div>
            <div> {input.description}</div>

            <div> {input.formElement}</div>
          </div>
        ))}
        {props.showSubmit ? (
          <button className="btn btn-secondary float-right" type="submit">
            Submit
          </button>
        ) : null}
      </form>
    </div>
  </div>
);
