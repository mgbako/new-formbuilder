import React from "react";
import Aux from "../../../HOC/Aux";
import LeftSideBar from "../../UI/sidebars/LeftSideBar";

export default props => (
  <Aux>
    <LeftSideBar />
    {props.children}
  </Aux>
);
