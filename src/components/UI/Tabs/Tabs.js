import React, { Component } from "react";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";
import DateRangePicker from "react-bootstrap-daterangepicker";

class Tabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex:
        tabIndex === this.state.activeTabIndex
          ? this.props.defaultActiveTabIndex
          : tabIndex
    });
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tabs">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="btn-toolbar mb-2 mb-md-0">
            {this.renderChildrenWithTabsApiAsProps()}
            <select className="selectpicker">
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
            <DateRangePicker startDate="7/7/2018" endDate="8/7/2018">
              <button className="btn btn-sm btn-outline-secondary">
                <FeatherIcon icon="calendar" size="18" className="icon" />
              </button>
            </DateRangePicker>
          </div>
        </div>

        <div className="">{this.renderActiveTabContent()}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  defaultActiveTabIndex: PropTypes.number
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0
};

export default Tabs;
