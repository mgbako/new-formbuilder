import React from "react";

export const NewForm = props => (
  <div className="modal fade" id="AddForm">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={props.createForm}>
            <div className="form-group">
              <label>Select Workspace:</label>
              <select ref={input => props.handleWorkspaceSelect(input)}>
                {props.workspaces.map(workspace => (
                  <option key={workspace.id} value={workspace.id}>
                    {workspace.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              name="formTitle"
              className="form-control"
              placeholder="Form title"
              required
              onChange={props.handleNameChange}
            />
            <div className="space2" />
            <button
              className="btn btn-lg btn-secondary float-right"
              type="submit"
              data-dismiss="modal"
              onClick={props.createForm}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
