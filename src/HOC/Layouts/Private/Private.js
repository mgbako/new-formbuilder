import { LeftSideNav } from "../../../components/Navigation/Sidebars";
import React from "react";

export const Private = props => (
  <main id="main" className="container">
    <LeftSideNav />
    {props.children}
  </main>
);
