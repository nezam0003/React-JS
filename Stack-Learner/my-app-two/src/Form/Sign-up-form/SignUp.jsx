import React, { Component } from "react";
import Form from "./Form";

// Initial values for form
const initialValues = {
  name: "",
  email: "",
  password: "",
  birthday: "",
  gender: "",
};

export default class SignUp extends Component {
  state = {
    values: initialValues,
    agreement: false,
    errors: {},
  };

  // Input Change Handller
  inputFieldHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Agreement handler
  agreementHandler = (e) => {
    this.setState({
      agreement: e.target.checked,
    });
  };

  // Submit Form handller
  submitHandler = (e) => {
    e.preventDefault();
    const { isValid, errors } = this.validateForm();
    if (isValid) {
      console.log(this.state.values);
      e.target.reset();
      this.setState({
        values: initialValues,
        agreement: false,
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  // Form Validation
  validateForm = () => {
    const errors = {};
    const {
      values: { name, email, password, birthday, gender },
    } = this.state;
    if (!name) {
      errors.name = "Please enter your name";
    }
    if (!email) {
      errors.email = "please Enter your Email";
    }
    if (!password) {
      errors.password = "please Enter your password";
    }
    if (!birthday) {
      errors.birthday = "please Enter your Birthday";
    }
    if (!gender) {
      errors.gender = "please Select your Gender";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <Form
        values={this.state.values}
        agreement={this.state.agreement}
        errors={this.state.errors}
        inputFieldHandler={this.inputFieldHandler}
        agreementHandler={this.agreementHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}
