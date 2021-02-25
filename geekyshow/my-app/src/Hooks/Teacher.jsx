import React, { useState, Fragment } from "react";
import { Button } from "reactstrap";

const Teacher = () => {
  const [name, setName] = useState("Nezam");
  const [id, setId] = useState(1);
  const handleClick = () => {
    setName("Fhameed");
    setId(id + 1);
  };
  return (
    <Fragment>
      <h1>Teachers Name: {name}</h1>
      <h1>Teachers ID: {id}</h1>
      <Button color="success" onClick={handleClick}>
        Click
      </Button>
    </Fragment>
  );
};

export default Teacher;
