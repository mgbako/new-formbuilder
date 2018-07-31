import FeatherIcon from "feather-icons-react";
import { Aux } from "../../hoc/Auxilary";
import React from "react";

export default props => (
  <Aux>
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>User Role</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.members.map(user => (
          <tr className="text-left" key={user.email}>
            <td>{user.name}</td>
            <td>{user.role}</td>

            <td>
              <span>
                <a href={"mailto:" + user.email}>
                  <FeatherIcon
                    icon="mail"
                    size="24"
                    className="noteIcon"
                    id={user.email}
                  />
                </a>
              </span>
            </td>

            <td>
              <span className="edit">
                <FeatherIcon
                  icon="trash-2"
                  size="24"
                  className="noteIcon"
                  id={user.email}
                  onClick={props.deleteMember}
                />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="space5" />
  </Aux>
);
