import classes from "./Info.css";
import React from "react";

export const Info = props => (
  <div className={classes.Info}>
    <span className={classes.Closebtn} onClick={props.close}>
      &times;
    </span>
    <strong>Info!</strong> {props.message}
  </div>
);
