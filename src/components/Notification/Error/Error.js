import classes from "./Error.css";
import React from "react";
export const Error = props => (
  <div id={classes.HideMe} className={classes.Error}>
    <span className={classes.Closebtn} onClick={props.close}>
      &times;
    </span>
    <strong>Error! </strong> {props.message}
  </div>
);
