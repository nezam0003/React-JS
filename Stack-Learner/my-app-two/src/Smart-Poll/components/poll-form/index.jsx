import React, { Component } from "react";
import shortid from "shortid";
import MyForm from "./form";

const defaultOptions = [
  {
    id: shortid.generate(),
    value: "",
    vote: 0,
  },
  {
    id: shortid.generate(),
    value: "",
    vote: 0,
  },
];

export default class PollForm extends Component {
  state = {
    title: "",
    description: "",
    options: defaultOptions,
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOptionChange = (e, index) => {
    const { options } = this.state;
    options[index].value = e.target.value;
    this.setState({ options });
  };

  createOption = () => {
    const { options } = this.state;
    if (options.length < 5) {
      options.push({
        id: shortid.generate(),
        value: "",
        vote: 0,
      });
      this.setState({ options });
    } else {
      alert("You can create max 5 options");
    }
  };

  deleteOptions = (index) => {
    const { options } = this.state;
    if (options.length > 2) {
      options.splice(index, 1);
      this.setState({ options });
    } else {
      alert("You must have at least two options");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = this.validate();
    if (isValid) {
      const { title, description, options } = this.state;
      this.props.submit({
        title,
        description,
        options,
      });
      e.target.reset();
      this.setState({
        title: "",
        description: "",
        options: defaultOptions,
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = (e) => {
    const errors = {};
    const { title, description, options } = this.state;
    if (!title) {
      errors.title = "please provide Title";
    } else if (title.length > 100) {
      errors.title = "Title is too long";
    } else if (title.length < 20) {
      errors.title = "Title is too short";
    }

    if (!description) {
      errors.description = "Please give a short description";
    } else if (description.length > 500) {
      errors.description = "Description is too long";
    }

    const optionErrors = [];
    options.forEach((opt, index) => {
      if (!opt.value) {
        optionErrors[index] = "Option is Empty";
        // optionErrors.push('Option is Empty');
      } else if (opt.value.length > 100) {
        optionErrors[index] = "Option is too long";
        // optionErrors.push('Option is too long')
      }
    });
    if (optionErrors.length > 0) {
      errors.options = optionErrors;
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    const { title, description, options, errors } = this.state;
    return (
      <MyForm
        title={title}
        description={description}
        options={options}
        buttonValue={this.props.buttonValue || "Create Poll"}
        errors={errors}
        handleChange={this.handleChange}
        handleOptionChange={this.handleOptionChange}
        createOption={this.createOption}
        deleteOptions={this.deleteOptions}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
