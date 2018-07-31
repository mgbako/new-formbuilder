import React from "react";

export default props => {
  const showCreateMember = props.showModal ? "active" : "";
  return (
    <div className={"slider-parent " + showCreateMember}>
      <span className="float-right">
        <button className="btn close" onClick={props.hideModal}>
          &times;
        </button>
      </span>
      <form className="card">
        <div className="card-body">
          <h1 className="h3 mb-3 font-weight-normal">Add User</h1>
          <input
            type="text"
            id="inputName"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
            onChange={e => props.setNewMemberDetail("name", e.target.value)}
          />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            onChange={e => props.setNewMemberDetail("email", e.target.value)}
          />
          <input
            type="number"
            id="inputNumber"
            className="form-control"
            placeholder="Phone Number"
            required
            onChange={e => props.setNewMemberDetail("phone", e.target.value)}
          />

          <select
            className="form-control"
            onChange={e => props.setNewMemberDetail("role", e.target.value)}
          >
            <option value="worker">worker</option>
            <option value="admin">admin</option>
          </select>

          <div className="checkbox mb-3" />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit "
            onClick={props.createMember}
            data-dismiss="modal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
