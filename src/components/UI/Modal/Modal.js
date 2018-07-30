import Classes from "./Modal.css";
import React from "react";

const modal = props => (
  <div
    style={{
      transform: props.show ? "translateY(0) " : "trasm;atey(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
    className={Classes.Modal}
  >
    {props.children}
  </div>
);

export default modal;
