import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import DateRangePicker2 from "react-bootstrap-daterangepicker";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Collapsible from "react-collapsible";
import axios from "axios";
import "bootstrap-daterangepicker/daterangepicker.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFormResponseStatus } from "../../actions/workspaceActions";
import ImagePlaceholder from "../../img/placeholder-face.png";

const MostPopularForms = {
  labels: [
    "Prepaid Card Request",
    "Dormant Account Reactivation",
    "Internet and Online Banking",
    "Account Update"
  ],
  datasets: [
    {
      label: "Most popular Forms",
      backgroundColor: "#99FF99",
      hoverBackgroundColor: "#339933",
      data: [915, 850, 791, 750]
    }
  ]
};

const CompletedForms = {
  labels: [
    "Prepaid Card Request",
    "Dormant Account Reactivation",
    "Internet and Online Banking",
    "Account Update"
  ],
  datasets: [
    {
      data: [300, 50, 100, 20],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#D3D3D3"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#D3D3D3"]
    }
  ]
};

const UnsubmittedResponses = {
  labels: [
    "Prepaid Card Request",
    "Account collectibles",
    "Account Update",
    "Prepaid Cash Request"
  ],
  datasets: [
    {
      data: [300, 50, 100, 500],
      backgroundColor: ["#339966", "#336699", "#663333", "#990000"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

class Overview extends Component {
  constructor(props) {
    super();

    this.state = {
      notingActivity: [],
      unread: "",
      processed: "",
      noted: ""
    };
  }

  componentWillMount() {
    this.props.fetchFormResponseStatus();

    console.log(this.props.formResponseData);

    axios
      .get(
        "http://swyp-business-backend-service.herokuapp.com/api/v1/businesses/stats"
      )
      .then(res => {
        this.setState({ notingActivity: res.data.notingActivity });
        console.log(this.state.notingActivity);
      });

    axios
      .get(
        "http://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/pending"
      )
      .then(res => {
        this.setState({ unread: res.data.count });
        console.log(res.data.count);
      });
    axios
      .get(
        "http://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/noted"
      )
      .then(res => {
        this.setState({ noted: res.data.count });
        console.log(res.data.count);
      });

    axios
      .get(
        "http://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/processed"
      )
      .then(res => {
        this.setState({ processed: res.data.count });
        console.log(res.data.count);
      });
  }

  render() {
    return (
      <main id="main" className="container">
        <div className="space5" />
        <Collapsible
          tabIndex={0}
          ransitionTime={200}
          trigger="Quick Overview"
          open
        >
          <div className="card bg-white ">
            <div className="card-body row  text-center">
              <div className="col-md-4">
                <h5 className="card-title">Unread</h5>
                <p className="card-text">{this.state.unread}</p>
              </div>

              <div className="col-md-4">
                <h5 className="card-title">Noted</h5>
                <p className="card-text">{this.state.noted}</p>
              </div>

              <div className="col-md-4">
                <h5 className="card-title">Processed</h5>
                <p className="card-text">{this.state.processed}</p>
              </div>
            </div>
          </div>
        </Collapsible>

        <div className="space5" />

        <div className="row">
          <div className="table-responsive col-md-6">
            <h4>Users Activity</h4>

            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Users</th>
                  <th className="text-right">
                    Percent of Forms Processed<span>
                      <DateRangePicker2 startDate="7/7/2018" endDate="8/7/2018">
                        <button className="btn btn-sm btn-outline-secondary">
                          <FeatherIcon
                            icon="calendar"
                            size="18"
                            className="icon"
                          />
                        </button>
                      </DateRangePicker2>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.notingActivity.map(note => (
                  <tr className="text-left">
                    <td>
                      <img
                        src={ImagePlaceholder}
                        alt=""
                        className="ImagePlaceholder"
                      />
                      {note._id}
                    </td>
                    <td className="text-right">{note.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="shadow-sm col-md-6" style={{ height: "350px" }}>
            <h4>Moste Popular Forms </h4>

            <Bar
              data={MostPopularForms}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* whenClicked is a property not an event, per se. */}

        {/* whenClicked is a property not an event, per se. */}

        <div className="space5" />

        <div className="row">
          <div className="shadow-sm col-md-6">
            <h4>Completed Forms </h4>
            <Doughnut data={CompletedForms} />
          </div>
          <div className="shadow-sm col-md-6">
            <h4>Unsubmitted Forms </h4>

            <Pie data={UnsubmittedResponses} />
          </div>
        </div>
      </main>
    );
  }
}

Overview.propTypes = {
  fetchFormResponseStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  formResponseData: state.workspaces.formResponseData
});
export default connect(
  mapStateToProps,
  { fetchFormResponseStatus }
)(Overview);
