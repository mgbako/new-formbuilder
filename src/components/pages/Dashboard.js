import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import DateRangePicker2 from 'react-bootstrap-daterangepicker';
import DateRangePicker3 from 'react-bootstrap-daterangepicker';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import 'bootstrap-daterangepicker/daterangepicker.css';

import ImagePlaceholder from '../../img/placeholder-face.png';


const MostPopularForms = {
  labels: ['Prepaid Card Request', 'Dormant Account Reactivation', 'Internet and Online Banking', 'Account Update'],
  datasets: [
    {
      label: 'Most popular Forms',
      backgroundColor: '#99FF99',
      hoverBackgroundColor: '#339933',
      data: [915, 850, 791, 750],
    },
  ],
};


const CompletedForms = {
  labels: [
    'Prepaid Card Request',
    'Dormant Account Reactivation',
    'Internet and Online Banking',
    'Account Update',
  ],
  datasets: [{
    data: [300, 50, 100, 20],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#D3D3D3',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#D3D3D3',
    ],
  }],
};

const UnsubmittedResponses = {
  labels: [
    'Prepaid Card Request',
    'Account collectibles',
    'Account Update',
    'Prepaid Cash Request',

  ],
  datasets: [{
    data: [300, 50, 100, 500],
    backgroundColor: [
      '#339966',
      '#336699',
      '#663333',
      '#990000',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
};


class Dashboard extends Component {
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

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">

                <div className="card bg-white rounded shadow" style={{ width: '60%' }}>
                  <div className="card-body row  text-center">
                    <div className="col-md-4">
                      <h3 className="card-title">Unread</h3>
                      <p className="card-tex">900</p>
                    </div>

                    <div className="col-md-4">
                      <h3 className="card-title">Pending</h3>
                      <p className="card-text">1200</p>
                    </div>

                    <div className="col-md-4">
                      <h3 className="card-title">Processed</h3>
                      <p className="card-text">2000</p>
                    </div>

                  </div>
                </div>

                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary"> Unread</button>
                    <button className="btn btn-sm btn-outline-secondary">Pending</button>
                    <button className="btn btn-sm btn-outline-secondary">Processed</button>
                  </div>

                  <select className="selectpicker">
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>

                  </select>
                  <DateRangePicker startDate="7/7/2018" endDate="8/7/2018">
                    <button className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="calendar" size="18" className="icon" /></button>
                  </DateRangePicker>
                </div>
              </div>


              <div className="table-responsive">
                <table className="table table-sm shadow-sm">
                  <thead>
                    <tr>
                      <th>Forms</th>
                      <th>Respondents</th>
                      <th>Date Recieved</th>
                      <th>Date Processed</th>
                      <th>Procesed By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018 </td>
                      <td>John Chike</td>
                    </tr>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018 </td>
                      <td>John Chike</td>
                    </tr>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018</td>
                      <td>John Chike</td>
                    </tr>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018 </td>
                      <td>John Chike</td>
                    </tr>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018</td>
                      <td>John Chike</td>
                    </tr>
                    <tr>
                      <td>Prepaid Card Request</td>
                      <td>Abu Femi</td>
                      <td>Jun 6, 2018 </td>
                      <td>Jun 21, 2018 </td>
                      <td>John Chike</td>
                    </tr>

                  </tbody>
                </table>
              </div>


              <div className="space5" />
              <div className="row">

                <div className="col-md-6 shadow bg-white rounded">
                  <div className="table-responsive ">
                    <h3> Users</h3>
                    <table className="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>Users</th>
                          <th className="text-right">Percent of Forms Processed    <span><DateRangePicker2 startDate="7/7/2018" endDate="8/7/2018">
                            <button className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="calendar" size="18" className="icon" /></button>
                                                                                         </DateRangePicker2>
                          </span>
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-left">
                          <td><img src={ImagePlaceholder} className="ImagePlaceholder" />	Abu Femi</td>
                          <td className="text-right">40%</td>

                        </tr>
                        <tr>
                          <td> <img src={ImagePlaceholder} className="ImagePlaceholder" />	Yetunde  Rashid</td>
                          <td className="text-right">30%</td>

                        </tr>
                        <tr>
                          <td><img src={ImagePlaceholder} className="ImagePlaceholder" />	John Adamu</td>
                          <td className="text-right">20%</td>

                        </tr>

                      </tbody>
                    </table>
                  </div>


                </div>
                <div className="col-md-6 shadow-sm bg-white rounded" style={{ height: '350px' }}>
                  <h3>Most Popular Forms</h3>
                  <Bar
                    data={MostPopularForms}
                    width={100}
                    height={50}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />

                </div>
              </div>


              <div className="space5" />
              <div className="row">

                <div className="col-md-6 shadow-sm bg-white rounded">
                  <h3> Completed forms</h3>
                  <Doughnut data={CompletedForms} />

                </div>
                <div className="col-md-6 shadow bg-white rounded">

                  <h3>Unsubmitted Responses</h3>
                  <Pie data={UnsubmittedResponses} />
                </div>
              </div>

              <div className="space10" />
            </main>
          </div>
        </div>


      </div>

    );
  }
}

export default Dashboard;
