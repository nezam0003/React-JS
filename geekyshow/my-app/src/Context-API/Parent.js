import React, { Component } from "react";
import Child from "./Child";
import { Provider } from "./Context";

export default class Parent extends Component {
  state = {
    name: "fhameed",
    value: 10,
  };
  handleClickContext = () => {
    this.setState({ value: this.state.value + 5 });
  };
  render() {
    const contextValue = {
      data: this.state,
      clickHandle: this.handleClickContext,
    };
    return (
      <Provider value={contextValue}>
        <Child />
      </Provider>
    );
  }
}
