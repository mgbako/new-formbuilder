import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,

} from 'react-router-dom';


class Header extends Component {
  logOut() {
    delete window.sessionStorage.token;
  }


  render() {
    return (

      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-bold Header-logo"><Link to="/dashboard">SWYP</Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">Help</a>
          <a className="p-2 text-dark" href="#">Login</a>
          <a className="p-2 text-dark" href="#" onClick={this.logOut}>Logout</a>

        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div>
    );
  }
}

export default Header;
