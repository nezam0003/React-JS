import React from "react";
import { Container, Row, Col } from "reactstrap";
import MyCard from "./components/Card";

const App = () => {
  return (
    <Container>
      <Row>
        <Col sm="4">
          <MyCard
            imageSource="https://source.unsplash.com/random/1"
            description="A Netflix Original Series"
            title="Stranger"
            movieLink="https://www.netflix.com/bd/title/80187302"
          />
        </Col>
        <Col sm="4">
          <MyCard
            imageSource="https://source.unsplash.com/random/2"
            description="A Netflix Original Series"
            title="Black"
            movieLink="https://www.netflix.com/bd/title/80214013"
          />
        </Col>
        <Col sm="4">
          <MyCard
            imageSource="https://source.unsplash.com/random/3"
            description="A Netflix Original Series"
            title="Bad Guys"
            movieLink="https://www.netflix.com/bd/title/80214772"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
