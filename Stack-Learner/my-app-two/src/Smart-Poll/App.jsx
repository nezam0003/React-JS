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

  // Get Opinion
  getOpinion = (response) => {
    const { polls } = this.state;
    const poll = polls.find((p) => p.id === response.pollId);
    const option = poll.options.find((o) => o.id === response.selectedOption);

    poll.totalVote++;
    option.vote++;
    const opinion = {
      id: shortid.generate(),
      name: response.name,
      selectedOption: response.selectedOption,
    };
    poll.opinions.push(opinion);
    this.setState({ polls });
  };

  //   Handle Search in Sidebar
  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };
  performSearchTerm = () => {
    return this.state.polls.filter((poll) =>
      poll.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    const polls = this.performSearchTerm();
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar
              polls={polls}
              searchTerm={this.state.searchTerm}
              handleSearch={this.handleSearch}
              selectPoll={this.selectPoll}
              addNewPoll={this.addNewPoll}
            />
          </Col>
          <Col md={8}>
            <MainContent
              poll={this.state.selectedPoll}
              getOpinion={this.getOpinion}
              updatePoll={this.updatePoll}
              deletePoll={this.deletePoll}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
