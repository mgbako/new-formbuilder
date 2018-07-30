import { Success } from "../../components/Notification/Success";
import { Error } from "../../components/Notification/Error";
import { endNotification } from "../../store/actions";
import { messageTranslator } from "../../utils";
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
    setTimeout(() => this.props.stop(), 9000);
    return notification;
  };

  render() {
    const { message, type, title, show } = this.props;
    return show ? (
      <main className={classes.NotificationBody}>
        {this.renderNotification(type, messageTranslator(message), title)}
      </main>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    message: state.app.notificationMessage,
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
