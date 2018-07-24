import React from "react";

export default props => (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Note
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <textarea
            name="note"
            className="form-control"
            placeholder="Type your answer here"
            onChange={props.newNote}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            onClick={props.createNode}
            data-dismiss="modal"
          >
            Save note
          </button>
        </div>
      </div>
    </div>
  </div>
);
