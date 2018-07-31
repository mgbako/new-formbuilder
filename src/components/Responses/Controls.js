import React from "react";

const Controls = props => (
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group mr-2">
        <button
          className="btn btn-sm btn-outline-secondary"
          value="unread"
          onClick={this.getResponseToShow}
        >
          Unread
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          value="pending"
          onClick={this.getResponseToShow}
        >
          Pending
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          value="processed"
          onClick={this.getResponseToShow}
        >
          Processed
        </button>
      </div>

      <select className="selectpicker">
        <option>Today</option>
        <option>Yesterday</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </select>
      {/* <DateRangePicker startDate="7/7/2018" endDate="8/7/2018">
        <button className="btn btn-sm btn-outline-secondary">
          <FeatherIcon icon="calendar" size="18" className="icon" />
        </button>
      </DateRangePicker> */}
    </div>
  </div>
);

export default Controls;
