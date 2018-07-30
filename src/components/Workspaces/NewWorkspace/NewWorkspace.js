import React from "react";

export const NewWorkspace = props => (
  <div className="modal fade" id="newWorkspace">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add a new Workspace</h4>
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Name your new workstation"
              required
              autofocus
              value={props.name}
              onChange={props.changeName}
            />
            <div className="space2" />
            <button
              className="btn btn-lg btn-secondary float-right"
              type="submit"
              onClick={props.createNewWorkspace}
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
