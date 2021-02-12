import React, { Component } from "react";
import { Form, FormGroup, FormFeedback, Input, CustomInput, Label, Button } from "reactstrap";

export default class ParticipationForm extends Component {
  state = {
    name: "",
    selectedOption: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const [isValid, errors] = this.validate();
    if (isValid) {
      this.props.getOpinion({
        pollId: this.props.poll.id,
        name: this.state.name,
        selectedOption: this.state.selectedOption,
      });
      e.target.reset();
      this.setState({
        name: "",
        selectedOption: "",
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { name, selectedOption } = this.state;
    if (!name) {
      errors.name = "Provide a name";
    } else if (name.length > 20) {
      errors.name = "Name is Too Long";
    }
    if (!selectedOption) {
      errors.selectedOption = "Please select a Option";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <Form onSubmit={this.handleChange}>
        <div className="d-flex">
          <h4>Options</h4>
          <Button
            className="ml-auto"
            onClick={this.props.toggleModal}
            type="button"
            color="warning"
          >
            Edit
          </Button>
          <Button
            className="ml-2"
            color="danger"
            type="button"
            onClick={() => this.props.deletePoll(this.props.poll.id)}
          >
            Delete
          </Button>
        </div>
        {this.props.poll.options.map((opt) => (
          <FormGroup className="my-2" key={opt.id}>
            <Label className="d-flex">
              <CustomInput
                type="radio"
                id={opt.id}
                value={opt.id}
                name="selectedOption"
                onChange={this.handleChange}
                invalid={this.state.errors.selectedOption ? true : false}
              />
              {opt.value}
              <span
                className="ml-auto"
                style={{
                  padding: "5px 20px",
                  background: "green",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {opt.vote}
              </span>
              <span
                className="ml-2"
                style={{
                  padding: "5px 20px",
                  background: "orange",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {this.props.totalVote > 0
                  ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2)
                  : 0}
                %
              </span>
            </Label>
          </FormGroup>
        ))}

        <FormGroup className="my-3">
          <Label>Enter Your Name</Label>
          <Input
            placeholder="Your Name"
            name="name"
            value={this.state.value}
            onChange={this.handleChange}
            invalid={this.state.errors.name ? true : false}
          />
          {this.state.errors.name && <FormFeedback>{this.state.errors.name}</FormFeedback>}
        </FormGroup>
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    );
  }
}
