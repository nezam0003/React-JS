import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

export default class Student extends Component {
  state = {
    name: this.props.name,
    age: 27,
  };
  handleClick = () => {
    // this.setState({ name: "Reshme", age: 21 });
    this.setState(({ name, age }) => {
      return {
        name: "Reshme",
        age: 21,
      };
    });
  };
  render() {
    const { name, age } = this.state;
    return (
      <div className="text-center">
        <h1 className="display-4 py-2 bg-dark text-white">
          Hello {name} your age is {age}
        </h1>
        <Button onClick={this.handleClick} color="success" className="ml-3">
          click to change Name
        </Button>
      </div>
    );
  }
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
};
Student.defaultProps = {
  name: "Jakia",
};
