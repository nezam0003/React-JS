import React from "react";
import PorpTypes from "prop-types";
import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        className="ml-auto"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};
ListItem.proptype = {
  todo: PropTypes.object.isRequried,
  toggleSelect: PropTypes.func.isRequried,
  toggleComplete: PropTypes.func.isRequried,
};

const ListView = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map((todo, toggleSelect, toggleComplete) => {
        <ListItem key={todo.id} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />;
      })}
    </ListGroup>
  );
};
ListView.proptype = {
  todo: PropTypes.object.isRequried,
  toggleSelect: PropTypes.func.isRequried,
  toggleComplete: PropTypes.func.isRequried,
};
export default ListView;
