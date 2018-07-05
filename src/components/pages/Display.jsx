import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
    <div>
      <div> {props.label}</div>

      <div> {props.displayInputElement}</div>
    </div>
  )


Display.propTypes = {
  label: PropTypes.string,
  displayInputElement: PropTypes.array
};
export default Display;
