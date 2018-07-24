import Response from "./Response/Response";
import React, { Component } from "react";
import AddNote from "./AddNote/AddNote";
import { connect } from "react-redux";
import Tabs from "../UI/Tabs/Tabs";
import Tab from "../UI/Tabs/Tab";
import Aux from "../../HOC/Aux";

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

  render() {
    return (
      <Aux>
        <Tabs>
          <Tab iconClassName={"Unread"} linkClassName={"custom-link"}>
            <div className="table-responsive">
              <Response
                responses={this.props.pending.result}
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

          <Tab iconClassName={"Processed"} linkClassName={"custom-link"}>
            <div className="table-responsive">
              <Response
                responses={this.props.processed.result}
                selectResponse={this.pickResponse}
              />
            </div>
          </Tab>
        </Tabs>
        <AddNote newNote={this.newNote} createNode={this.createNote} />
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.workspaces.formResponsePending,
  noted: state.workspaces.formResponseNoted,
  processed: state.workspaces.formResponseNoted
});

export default connect(mapStateToProps)(Responses);
