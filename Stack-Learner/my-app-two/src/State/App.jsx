// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     count: 0,
//     name: "Nezam",
//   };
//   countHandler = () => {
//     this.setState(
//       (prev) => {
//         return {
//           count: prev.count + 1,
//         };
//       },
//       () => console.log("clicked...", this.state.count)
//     );
//   };
//   render() {
//     return (
//       <div>
//         <h2>Count value: {this.state.count} </h2>
//         <button onClick={this.countHandler}>update count</button>
//       </div>
//     );
//   }
// }

/********* Simple Timer Project **********/
import React, { Component } from "react";
import "./App.style.css";

export default class App extends Component {
  state = {
    count: 0,
  };
  intervalID = null;
  increamentCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreamentCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalID) {
      this.intervalID = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer finished");
            clearInterval(this.intervalID);
            this.intervalID = null;
          }
        });
      }, 1000);
    }
  };
  stopTimer = () => {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  };
  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalID);
    this.intervalID = null;
  };
  render() {
    return (
      <div>
        <div className="app">
          <h2 className="heading">Simple Timer</h2>
          <div className="container">
            <button className="btn" onClick={this.decreamentCount}>
              -
            </button>
            <span className="text">{this.state.count}</span>
            <button className="btn" onClick={this.increamentCount}>
              +
            </button>
          </div>
          <div className="container">
            <button className="btn" onClick={this.startTimer}>
              Start
            </button>
            <button className="btn" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="btn" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
