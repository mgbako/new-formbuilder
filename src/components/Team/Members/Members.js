import ImagePlaceholder from "../../../img/placeholder-face.png";
import NewMember from "./NewMember/NewMember";
import FeatherIcon from "feather-icons-react";
import Aux from "../../../hoc/Aux";
import React from "react";

export default props => (
  <Aux>
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {props.members.map(user => (
          <tr className="text-left" key={user.email}>
            <td>
              <img src={ImagePlaceholder} alt="" className="ImagePlaceholder" />
              {user.name}
            </td>
            <td>
              <span className="edit">
                <a>
                  <FeatherIcon
                    icon="trash-2"
                    size="24"
                    className="noteIcon"
                    id={user.email}
                    onClick={props.deleteMember}
                  />
                </a>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="space5" />
    <NewMember
      showModal={props.showCreateMember}
      hideModal={props.toggleCreateMember}
    />
  </Aux>
);
