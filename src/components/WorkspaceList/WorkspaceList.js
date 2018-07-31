import FeatherIcon from "feather-icons-react";
import classes from "./WorkspaceList.css";
import { Aux } from "../../hoc/Auxilary";
import { Link } from "react-router-dom";
import React from "react";

export const WorkspaceList = props => {
  const result = props.workspaces.map(workspace => {
    return (
      <div className={`shadow ${classes.FormCategory}`} key={workspace.id}>
        <div className={classes.VerticalAlign}>
          <Link to={`/forms?workspace=${workspace.id}`}>{workspace.name}</Link>
        </div>
      </div>
    );
  });
  return (
    <Aux>
      <button
        type="button"
        className="btn bg-secondary btn-md text-light"
        data-toggle="modal"
        data-target="#newWorkspace"
      >
        <FeatherIcon icon="plus" size="18" className={classes.Icon} />
        New Workspace
      </button>
      <div className={`row ${classes.Container}`}>{result}</div>
    </Aux>
  );
};
