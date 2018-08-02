import classes from "./FormDisplay.css";

import React from "react";
export const FormDisplay = props => (
  <div className={`col-sm-5 ${classes.Form}`}>
    <div className="collection">
      <form id="form" style={props.style}>
        {props.inputs.map(input => (
          <div key={input.id}>
            <div> {input.description}</div>

            <div className={classes.Input}> {input.formElement}</div>
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
