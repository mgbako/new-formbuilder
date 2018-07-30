import { Preloader } from "../UI/Preloader";
import Response from "./Response/Response";
import React, { Component } from "react";
import AddNote from "./AddNote/AddNote";
import Tabs from "../UI/Tabs/Tabs";
import Tab from "../UI/Tabs/Tab";
import Aux from "../../hoc/Aux";

class Responses extends Component {
  state = {
    selectedResponseId: "",
    note: ""
  };

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
      <Tabs>
        <Tab iconClassName={"Unread"} linkClassName={"custom-link"}>
          <div className="table-responsive">
            <Response
              responses={this.props.pending.result}
              selectResponse={this.pickResponse}
            />
          </div>
        </Tab>
        <Tab iconClassName={"Processed"} linkClassName={"custom-link"}>
          <div className="table-responsive">
            <Response
              responses={this.props.processed.result}
              selectResponse={this.pickResponse}
            />
          </div>
        </Tab>
        <Tab iconClassName={"Pending"} linkClassName={"custom-link"}>
          <div className="table-responsive">
            <Response
              responses={this.props.noted.result}
              selectResponse={this.pickResponse}
            />
          </div>
        </Tab>
      </Tabs>
    );
  };

  render() {
    return (
      <Aux>
        {this.resultToRender(this.props.pending)}
        <AddNote newNote={this.newNote} createNode={this.createNote} />
      </Aux>
    );
  }
}

export default Responses;
