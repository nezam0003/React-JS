import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Student extends Component {
  state = {
    name: this.props.name,
  };
  render() {
    return <div>hello {this.state.name}</div>;
  }
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
};
Student.defaultProps = {
  name: "Jakia",
};
