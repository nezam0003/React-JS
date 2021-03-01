import React, { useState } from "react";
import { Form, Button, Input } from "reactstrap";
import classes from "../../Style.module.css";

const MyForm = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const inputFieldhandller = (e) => {
    const { name, value } = e.target;
    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
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
      <h4 className="display-4 text-warning d-block text-center">
        Hello,
        <span className="text-white">
          {fullName.firstName} {fullName.lastName}
        </span>
      </h4>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <Form onSubmit={showDataOnSubmit} className={classes.myForm}>
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
        <Input
          className="mt-2"
          type="email"
          placeholder="Enter your Your Email"
          value={fullName.email}
          name="email"
          onChange={inputFieldhandller}
        />
        <Input
          className="mt-2"
          type="number"
          placeholder="Enter your phone number"
          value={fullName.phone}
          name="phone"
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
