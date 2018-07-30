import FeatherIcon from "feather-icons-react";
import moment from "moment";
import React from "react";

export default props => (
  <div className="table-responsive">
    <table className="table table-sm shadow-sm">
      <thead>
        <tr>
          <th>Forms</th>
          <th>Respondents</th>
          <th>Date Recieved</th>
          <th>Date Processed</th>
          <th>Procesed By</th>
        </tr>
      </thead>
      <tbody>
        {props.responses.map(response => (
          <tr key={response._id}>
            <td>{response.form.name}</td>
            <td>
              {`${response.respondant.lastname} ${
                response.respondant.firstname
              } `}
            </td>
            <td> {moment(response.createdAt).format("ll")}</td>
            <td />
            <td>
              <div className="edit">
                <span
                  onClick={props.selectResponse}
                  id={response.form.id}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  #
                </span>
                <a>
                  <FeatherIcon icon="file" size="24" className="noteIcon" />
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
