import { BackDrop } from "../Backdrop/Backdrop";
import classes from "./Preloader.css";
import Aux from "../../../hoc/Aux";
import React from "react";

export const Preloader = props => (
  <Aux>
    <BackDrop click={props.click} show={props.show} />
    <div id="main" className={classes.PreloaderClass}>
      <div className={classes.PreloaderCenter}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </Aux>
);
