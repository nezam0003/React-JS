import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Container from "@material-ui/core/Container";
import classes from "./Keep.module.css";

const UI = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // console.log("clicked");
    setAddItem((prevData) => {
      return [note, ...prevData];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currentData, indx) => {
        return indx !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <div className={classes.max_height}>
        <Container maxWidth="md">
          <CreateNote notes={addNote} />
          {addItem.map((value, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={value.title}
                content={value.content}
                deleteItem={onDelete}
              />
            );
          })}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default UI;
