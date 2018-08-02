import classes from "./FormSettings.css";
import React from "react";

export const FormSetting = props => (
  <div className={classes.FormSettings} id="forms">
    <div className="collection" id="kiki">
      {props.inputs.map(input => (
        <div key={input.id} className={classes.Input}>
          {" "}
          {input.questionElement}{" "}
        </div>
      ))}
    </div>
  </div>
);
