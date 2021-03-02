import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import classes from "../Todo.module.css";
import shortid from "shortid";
import Todo from "./Todo";

const UI = () => {
  const [userInput, setUserInput] = useState("");
  const [userItemContainer, setUserItemContainer] = useState([]);
  const inputFieldHandller = (e) => {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const showDataOnClick = (e) => {
    setUserItemContainer((prevItems) => {
      console.log(prevItems);
      return [userInput, ...prevItems];
    });
    setUserInput("");
  };
  const deleteItem = (id) => {
    setUserItemContainer((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.centerDiv}>
          <h1 className="text-center bg-dark text-white py-2">TO-DO List</h1>
          <div className="d-flex px-3">
            <Input
              className="mr-2"
              type="text"
              placeholder="Enter Item"
              value={userInput}
              onChange={inputFieldHandller}
            />
            <Button color="success" onClick={showDataOnClick}>
              <i className="fas fa-plus"></i>
            </Button>
          </div>
          <div className="px-3 mt-4">
            <ol style={{ color: "#6983aa", fontWeight: "bold", textTransform: "capitalize" }}>
              {userItemContainer.map((item, index) => {
                return (
                  <Todo key={shortid.generate()} id={index} text={item} onSelect={deleteItem} />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
