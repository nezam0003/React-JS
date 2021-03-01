import React, { useState } from "react";
import { Form, Button, Input } from "reactstrap";
import classes from "../../Style.module.css";

const MyForm = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  const inputFieldhandller = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFullName((prevValue) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prevValue.lastName,
        };
      } else if (name === "lastName") {
        return {
          firstName: prevValue.firstName,
          lastName: value,
        };
      }
    });
  };

  const showDataOnSubmit = (e) => {
    e.preventDefault();
    alert("Form submited");
    // setshowFirstName(name);
    // setShowLastName(lastName);
  };

  return (
    <div className={classes.mainContent}>
      <h4 className="display-4 text-warning">
        Hello,
        <span className="text-white">
          {fullName.firstName} {fullName.lastName}
        </span>
      </h4>
      <Form onSubmit={showDataOnSubmit}>
        <Input
          type="text"
          placeholder="Enter your First Name"
          value={fullName.firstName}
          name="firstName"
          onChange={inputFieldhandller}
        />
        <Input
          className="mt-2"
          type="text"
          placeholder="Enter your Last Name"
          value={fullName.lastName}
          name="lastName"
          onChange={inputFieldhandller}
        />
        <Button type="submit" color="success" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
