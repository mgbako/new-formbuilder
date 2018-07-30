import classes from "./Warning.css";
import React from "react";

export const Warning = props => (
  <div className={classes.Warning}>
    <span className={classes.Closebtn} onClick={props.close}>
      &times;
    </span>
    <strong>Warning!</strong> {props.message}
  </div>
);
