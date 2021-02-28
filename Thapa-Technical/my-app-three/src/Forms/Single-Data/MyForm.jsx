import React, { useState } from "react";
import { Form, Button, Input } from "reactstrap";
import classes from "../../Style.module.css";

const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [showFirstName, setshowFirstName] = useState();
  const [showLastName, setShowLastName] = useState();

  const inputFieldhandller = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandller = (e) => {
    setLastName(e.target.value);
  };

  const showDataOnSubmit = (e) => {
    e.preventDefault();
    setshowFirstName(firstName);
    setShowLastName(lastName);
  };

  return (
    <div className={classes.mainContent}>
      <h4 className="display-4 text-warning">
        Hello,
        <span className="text-white">
          {showFirstName} {showLastName}
        </span>
      </h4>
      <Form onSubmit={showDataOnSubmit}>
        <Input
          type="text"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={inputFieldhandller}
        />
        <Input
          className="mt-2"
          type="text"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={lastNameHandller}
        />
        <Button type="submit" color="success" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
