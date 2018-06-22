import React, { Component } from 'react';



class Header extends Component {
  render() {



    return (

      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow">
          <h5 class="my-0 mr-md-auto font-weight-bold Header-logo">SWYP</h5>
          <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">Help</a>
            <a class="p-2 text-dark" href="#">Login</a>

          </nav>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div>
    );
  }
}

export default Header;
