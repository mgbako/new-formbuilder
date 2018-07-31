import { Preloader } from "../UI/Preloader";
import Response from "./Response/Response";
import Controls from "./Controls";
import React, { Component } from "react";
import AddNote from "./AddNote/AddNote";
import Aux from "../../hoc/Aux";

const unread = () => (
  <Response
    responses={this.props.pending.result}
    selectResponse={this.pickResponse}
  />
);

const pending = () => (
  <Response
    responses={this.props.noted.result}
    selectResponse={this.pickResponse}
  />
);

const processed = () => (
  <Response
    responses={this.props.processed.result}
    selectResponse={this.pickResponse}
  />
);

class Responses extends Component {
  state = {
    selectedResponseId: "",
    note: "",
    responseToShow: "unread"
  };

  getResponseToShow = e => {
    e.preventDefault();
    this.setState({ responseToShow: e.target.value });
    console.log(this.state.responseToShow);
  };

  responseSwitch(responseToShow) {
    switch (responseToShow) {
      case "unread":
        return unread;
      case "pending":
        return pending;
      case "processed":
        return processed;
      default:
        return unread;
    }
  }

  newNote = e => {
    this.setState({ noteText: e.target.value });
  };

  createNote = e => {
    console.log("about to create note");
  };

  pickResponse = e => {
    this.setState({ selectedResponseId: e.target.id });
  };

  resultToRender = result => {
    return !this.props.pending.count ? (
      <Preloader />
    ) : (
      this.responseSwitch(this.state.responseToShow)
    );
  };

  render() {
    return (
      <Aux>
        <Controls />
        <div className="table-responsive">
          {this.resultToRender(this.props.pending)}
        </div>

        <AddNote newNote={this.newNote} createNode={this.createNote} />
      </Aux>
    );
  }
}

export default Responses;
