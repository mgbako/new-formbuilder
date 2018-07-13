import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-bold Header-logo">SWYP</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link className="p-2 text-dark" to="/">
        Help
      </Link>
      <Link className="p-2 text-dark" to="/">
        Login
      </Link>
    </nav>
    <Link className="btn btn-outline-primary" to="/signup">
      Sign up
    </Link>
  </div>
);

export default Header;
