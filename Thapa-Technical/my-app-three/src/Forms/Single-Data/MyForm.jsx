import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import classes from "../../Style.module.css";

const MyForm = () => {
  const [name, setName] = useState();
  const [showName, setShowName] = useState();
  const inputFieldhandller = (e) => {
    setName(e.target.value);
  };
  const showDataOnClick = () => setShowName(name);
  return (
    <div className={classes.mainContent}>
      <h4 className="display-4 text-warning">
        Hello, <span className="text-white">{showName}</span>
      </h4>
      <Input type="text" placeholder="Enter your Name" value={name} onChange={inputFieldhandller} />
      <Button onClick={showDataOnClick} type="submit" color="success" className="mt-3">
        Submit
      </Button>
    </div>
  );
};

export default MyForm;
