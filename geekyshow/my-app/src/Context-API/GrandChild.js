import React, { Component } from "react";
// import { Consumer } from "./Context";
import { MyContext } from "./Context";
export default class GrandChild extends Component {
  static contextType = MyContext;
  render() {
    const { name, value } = this.context.data;
    return (
      <div>
        <h2>Guest Component</h2>
        <h4>
          Name: {name} value : {value}
        </h4>
        <button onClick={this.context.clickHandle}>Change value</button>
      </div>
    );
  }
}
