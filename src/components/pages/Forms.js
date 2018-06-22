import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';



class Forms extends Component {
  render() {
    return (

      <div>

      <div className="container-fluid">
            <div className="row">
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
               <FeatherIcon icon="home" size="24" className="icon" />

                        Dashboard <span className="sr-only">(current)</span>
                      </a>
                    </li>


                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <FeatherIcon icon="users" size="24" className="icon" />
                        Manage Users
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <FeatherIcon icon="bar-chart-2" size="24" className="icon" />
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <FeatherIcon icon="file-text" size="24" className="icon" />
                        Forms
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <FeatherIcon icon="file-text" size="24" className="icon" />
                        Templates
                      </a>
                    </li>
                  </ul>

            </div>
              </nav>

              <main id="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="space1" />
<h3>Forms<span className="float-right"><button type="button" className="btn bg-secondary btn-md text-light"><FeatherIcon icon="plus" size="18" className="icon1" />
 New Form</button>
 </span></h3>

<div className="space5"/>

<div class="row">
  <div class="col-sm-2">
    <div class="card form-space shadow-sm">
      <div class="card-body">
        <h5 class="card-title"> Dormant Account Reactivation</h5>
      </div>
<div class="card-footer text-muted">     no responses
  </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card form-space shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Account Update</h5>
      </div>
<div class="card-footer text-muted">     no responses
  </div>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="card form-space shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Prepaid Card Request</h5>
      </div>
<div class="card-footer text-muted">     no responses
  </div>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="card form-space shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Internet and Online Banking</h5>
      </div>
<div class="card-footer text-muted">     no responses
  </div>
    </div>
  </div>

</div>


              </main>
            </div>
          </div>





      </div>
    );
  }
}

export default Forms;
