import React from "react";
import { Container, Row, Col } from "reactstrap";
import MyCard from "./components/Card";
import Header from "./components/Header";
import movieData from "./mData";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          {movieData.map((data) => {
            const { id, imgsrc, description, title, movieLink } = data;
            // console.log(id);
            return (
              <Col md="4" className="my-3" key={id}>
                <MyCard
                  imageSource={imgsrc}
                  description={description}
                  title={title}
                  movieLink={movieLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default App;
