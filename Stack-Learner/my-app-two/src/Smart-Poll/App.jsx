import React, { Component } from "react";
import shortid from "shortid";
import { Container, Row, Col } from "reactstrap";
import MainContent from "./components/main-content/index";
import Sidebar from "./components/sidebar/index";
import POLLS from "./dummy-poll/data";

export default class App extends Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: "",
  };
  componentDidMount() {
    this.setState({ polls: POLLS });
  }

  //   Add New Poll
  addNewPoll = (poll) => {
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinion = [];

    this.setState({
      polls: [...this.state.polls, poll],
    });
  };

  //   Update poll
  updatePoll = (updatedPoll) => {
    const polls = [...this.state.polls];
    const poll = polls.find((p) => p.id === updatedPoll.id);

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.options = updatedPoll.opinions;

    this.setState({ polls });
  };

  // Delete Poll
  deletePoll = (pollId) => {
    const polls = this.state.polls.filter((p) => p.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  //   Select Poll
  selectPoll = (pollId) => {
    const poll = this.state.polls.find((p) => p.id === pollId);
    this.setState({ selectedPoll: poll });
  };

  //   Handle Search in Sidebar
  handleSearch = (searchTerm) => {};

  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar
              polls={this.state.polls}
              searchTerm={this.state.searchTerm}
              handleSearch={this.handleSearch}
              selectPoll={this.selectPoll}
              addNewPoll={this.addNewPoll}
            />
          </Col>
          <Col md={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    );
  }
}
