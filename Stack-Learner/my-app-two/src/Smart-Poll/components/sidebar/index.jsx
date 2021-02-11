import React, { Component } from "react";
import { Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import PollList from "./poll-list";

export default class Sidebar extends Component {
  state = {
    openModal: false,
  };
  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render() {
    return (
      <div style={{ background: "#efefef", padding: "10px" }}>
        <div className="d-flex mb-5">
          <Input
            type="search"
            placeholder="search"
            value={this.props.searchTerm}
            onChange={(e) => this.props.handleSearch(e.target.value)}
          />
          <Button color="success" className="ml-2" onClick={this.toggleModal}>
            New
          </Button>
        </div>
        <h3>List Of Polls</h3>
        <hr />
        <PollList polls={this.props.polls} selectPoll={this.props.selectPoll} />
        <Modal isOpen={this.state.openModal} toggle={this.toggleModal} unmountOnClose={true}>
          <ModalHeader toggle={this.toggleModal}>Create a new Poll</ModalHeader>
          <ModalBody>this is modal body</ModalBody>
        </Modal>
      </div>
    );
  }
}
