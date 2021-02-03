import React from "react";
import TextInput from "./Text-input";
import PropTypes from "prop-types";
const MyForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <TextInput
        name="name"
        label="Your Name"
        placeholder="Enter Name"
        value={props.values.name}
        onChange={props.inputFieldHandler}
      />
      <TextInput
        name="email"
        type="email"
        label="Your Email"
        placeholder="Enter Email"
        value={props.values.email}
        onChange={props.inputFieldHandler}
      />
      <TextInput
        name="password"
        type="password"
        label="Your Password"
        placeholder="****"
        value={props.values.password}
        onChange={props.inputFieldHandler}
      />

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
MyForm.propTypes = {
  values: PropTypes.object.isRequired,
  inputFieldHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
export default MyForm;
