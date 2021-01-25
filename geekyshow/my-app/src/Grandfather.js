import React, { Component } from "react";
import Father from "./Father";
class Grandfather extends Component {
  constructor() {
    super();
    this.state = {
      roll: 101,
    };
  }
  changeRoll = () => {
    console.log("clicked");
    this.setState({
      // roll: 102,
      roll: this.state.roll + 1,
    });
  };
  render() {
    console.log("Grandfather Randered");
    return (
      <div>
        <Father roll={this.state.roll} />
        <button onClick={this.changeRoll}> Click Here To Change Roll</button>
      </div>
    );
  }
}
export default Grandfather;
