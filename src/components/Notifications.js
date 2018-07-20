import React from "react";

const Notifications = props => (
  <div className="errors">
    <div> {props.message}</div>
  </div>
);

export default Notifications;

// {this.props.error.map( error=> (
//         <Notifications message = {error.message}/>
//     ))  }
