import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  logOut() {
    sessionStorage.removeItem("token");
  }

  render() {
    let logged = sessionStorage.getItem("token");

    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-bold Header-logo">
          <Link to="/dashboard">SWYP</Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">
            Help
          </Link>

          {logged ? (
            <Link className="p-2 text-dark" onClick={this.logOut} to="#">
              Logout
            </Link>
          ) : (
            <Link className="p-2 text-dark" to="/">
              Login
            </Link>
          )}
        </nav>
        {logged ? null : (
          <Link className="btn btn-outline-primary" to="/signup">
            sign up
          </Link>
        )}
      </div>
    );
  }
}

export default Header;
