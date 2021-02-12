import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ParticipationForm from "./participate-form";
import PollForm from "../poll-form/index";
export default class MainContent extends Component {
  state = {
    openModal: false,
  };

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    if (Object.keys(this.props.poll).length === 0) {
      return (
        <div>
          <h3>Welcome to my Application</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sapiente doloribus
            dolores eveniet, quidem facere aut et fugiat vitae! Minima!
          </p>
        </div>
      );
    }

    const { poll, getOpinion, updatePoll, deletePoll } = this.props;
    return (
      <div>
        <h3>{poll.title}</h3>
        <p>{poll.description}</p>
        <br />

        <ParticipationForm
          poll={poll}
          getOpinion={getOpinion}
          toggleModal={this.toggleModal}
          deletePoll={deletePoll}
        />

        <Modal isOpen={this.state.openModal} toggle={this.toggleModal} unmountOnClose={true}>
          <ModalHeader toggle={this.toggleModal}>Update Modal</ModalHeader>
          <ModalBody>
            <PollForm poll={poll} isUpdate={true} submit={updatePoll} buttonValue="update Poll" />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
