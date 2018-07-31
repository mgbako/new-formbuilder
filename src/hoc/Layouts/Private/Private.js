import { LeftSideNav } from "../../../components/Navigation/Sidebars";
import React from "react";
import Classes from "./Private.css";

export const Private = props => (
  <main id="main" className={`row ${Classes.Row}`}>
    <LeftSideNav />

    {props.children}
  </main>
);
