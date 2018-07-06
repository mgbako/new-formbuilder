import React, { Component } from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `http://swyp-business-backend-service.herokuapp.com/api/v1/businesses/loginuser`,
        {
          email: this.state.email,
          password: this.state.password
        }
      )
      .then(res => {
        window.sessionStorage.all = res.data.business.accounts;
        window.sessionStorage.token = res.data.token;
        window.sessionStorage._id = res.data.business._id;
        if (res.data.token !== undefined) {
          this.props.history.push('/dashboard');
          console.log(window.sessionStorage.all);
        }
      })
      .catch(function(error) {});
  };

  render() {
    return (
      <main id="main" className="container">
        <div className="space10" />
        <div className="text-center">
          <form className="form-signin card" onSubmit={this.handleSubmit}>
            <div className="card-body">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={this.handleInputChange}
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
