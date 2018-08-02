import { LeftSideNav } from "../../../components/Navigation/Sidebars";
import React from "react";
import classes from "./Private.css";

export const Private = props => (
  <main className={`${classes.Row}`}>
    <LeftSideNav />

    <div className={classes.Content}>{props.children}</div>
  </main>
);
