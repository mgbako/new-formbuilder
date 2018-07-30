import classes from "./BackDrop.css";
import React from "react";
export const BackDrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.click} />
  ) : null;
