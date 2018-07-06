import React, { Component } from 'react';


class Signup extends Component {
  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />
        <div className="">

          <form className="form-signin card" >
            <div className="card-body">
              <h1 className="h3 mb-3 font-weight-normal">Sign up for a Business account</h1>
              <p>Enter the email address you’ll use to sign up or log in </p>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />

              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Signup;
