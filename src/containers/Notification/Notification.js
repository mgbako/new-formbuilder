import { Success } from "../../components/Notification/Success";
import { Error } from "../../components/Notification/Error";
import { endNotification } from "../../store/actions";
import React, { Component } from "react";
import classes from "./Notification.css";
import { connect } from "react-redux";

export class NotificationClass extends Component {
  renderNotification = (type, msg, title = null) => {
    let notification = null;
    switch (type) {
      case "success":
        notification = (
          <Success message={msg} title={title} close={this.props.stop} />
        );
        break;
      case "error":
        notification = (
          <Error message={msg} title={title} close={this.props.stop} />
        );
        break;
      default:
        break;
    }
    setTimeout(() => this.props.stop(), 3000);
    return notification;
  };

  render() {
    const { message, type, title } = this.props;
    return this.props.show ? (
      <main className={classes.NotificationBody}>
        {this.renderNotification(type, message, title)}
      </main>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    message: state.app.notificationMessage,
    title: state.app.notificationTitle,
    type: state.app.notificationType,
    show: state.app.showNotification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stop: () => dispatch(endNotification())
  };
};

export const Notification = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationClass);
