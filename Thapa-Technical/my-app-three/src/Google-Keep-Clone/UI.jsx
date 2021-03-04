import React from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Container from "@material-ui/core/Container";
import classes from "./Keep.module.css";

const UI = () => {
  return (
    <>
      <Header />
      <div className={classes.max_height}>
        <Container maxWidth="md">
          <CreateNote />
          <Note />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default UI;
