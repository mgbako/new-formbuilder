import React from 'react';

const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-bold Header-logo">SWYP</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2 text-dark" href="#help">Help</a>
      <a className="p-2 text-dark" href="#help">Login</a>

    </nav>
    <a className="btn btn-outline-primary" href="#signup">Sign up</a>
  </div>
);

export default Header;
