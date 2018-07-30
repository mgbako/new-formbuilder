import classes from "./Success.css";
import React from "react";

export const Success = props => (
  <div className={classes.Success}>
    <span className={classes.Closebtn} onClick={props.close}>
      &times;
    </span>
    <strong>Success!</strong> {props.message}
  </div>
);
