import classes from "./FormControls.css";

import React from "react";
export const FormControls = props => (
  <div className={classes.FormControls}>
    <button
      className="btn btn-secondary float-right"
      type="button"
      onClick={props.preview}
    >
      preview
    </button>
    <button
      className="btn btn-info float-right"
      type="button"
      onClick={props.create}
    >
      Save
    </button>
  </div>
);
