import React, { Component } from 'react';



class Login extends Component {
  render() {
    return (
      <main id="main" className="container">
      <div className ="space10"/>
      <div  className="text-center">

      <form className="form-signin card" >
      <div className="card-body">
       <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
       <label Htmlfor="inputEmail" className="sr-only">Email address</label>
       <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
       <label HTMlfor="inputPassword" className="sr-only">Password</label>
       <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
         <label>
           <input type="checkbox" value="remember-me" /> Remember me
         </label>
       </div>
       <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
       </div>
     </form>
      </div>
      </main>

    );
  }
}

export default Login;
