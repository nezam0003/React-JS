import React from "react";
import { Button } from "reactstrap";

const Todo = (props) => {
  return (
    <div className="d-flex justify-contnet-center align-items-center">
      <Button
        size="sm"
        color="danger"
        className="mr-2 mb-2"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        <i className="fas fa-times fw"></i>
      </Button>
      <li>{props.text}</li>
    </div>
  );
};

export default Todo;
