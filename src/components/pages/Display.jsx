import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
    <div>
      <div> {props.label}</div>

      <div> {props.displayInputElement}</div>
    </div>
  )

export default Display;

Display.PropTypes = {
  label: PropTypes.string,
  displayInputElement: PropTypes.array
};
