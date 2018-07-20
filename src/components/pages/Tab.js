import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div className="btn-group mr-2">
      <a
        className={`${props.linkClassName} ${props.isActive ? "active" : ""}`}
        onClick={event => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}
      >
        <button className="btn btn-sm btn-outline-secondary">
          {" "}
          {props.iconClassName}
        </button>
      </a>
    </div>
  );
};

Tab.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  iconClassName: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired
};

export default Tab;
