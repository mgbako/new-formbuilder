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
              <label for="sel1">Select Workspace:</label>
              <select onChange={props.handleWorkspaceSelected} />
            </div>
            <input
              type="text"
              name="formTitle"
              className="form-control"
              placeholder="Form title"
              required
              value={props.formName}
              onChange={props.handleNameChange}
            />
            <div className="space2" />
            <button
              className="btn btn-lg btn-secondary float-right"
              type="submit"
              data-dismiss="modal"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
