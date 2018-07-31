import { BackDrop } from "../Backdrop/Backdrop";
import classes from "./Preloader.css";
import { Aux } from "../../../hoc/Auxilary";
import React from "react";

export const Preloader = props => (
  <div>
    <BackDrop click={props.click} show={props.show} />
    <div id="main" className={classes.PreloaderClass}>
      <div className={classes.PreloaderCenter}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);
