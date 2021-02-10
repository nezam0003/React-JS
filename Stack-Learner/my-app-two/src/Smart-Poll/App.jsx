import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MainContent from "./components/main-content/index";
import Sidebar from "./components/sidebar/index";
import polls from "./dummy-poll/data";

export default class App extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    );
  }
}
