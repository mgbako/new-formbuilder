import React from "react";

export const FormSetting = props => (
  <div className="col-sm-4 form-height" id="forms">
    <div className="collection" id="kiki">
      {props.inputs.map(input => <div> {input.questionElement} </div>)}
    </div>
  </div>
);
