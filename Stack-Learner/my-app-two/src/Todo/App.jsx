import React from "react";
import { Container, Row, Col } from "reactstrap";
import Todo from "./components/todos/Index";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
