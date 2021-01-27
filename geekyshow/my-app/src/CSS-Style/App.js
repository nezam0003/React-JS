/*************** Inline Style  *************/
// import React, { Component, Fragment } from "react";

// export default class App extends Component {
//   state = {
//     change: false,
//   };
//   changeColor = () => {
//     this.setState({ change: true });
//   };
//   render() {
//     const btnStyle = {
//       color: "white",
//       backgroundColor: "black",
//     };
//     if (this.state.change) {
//       btnStyle.backgroundColor = "red";
//     }
//     return (
//       <Fragment>
//         <button style={btnStyle} onClick={this.changeColor}>
//           Button
//         </button>
//       </Fragment>
//     );
//   }
// }

/*************** External Style  *************/
import React, { Component, Fragment } from "react";
import User from "./User";
import "./App.css";
export default class App extends Component {
  render() {
    const style = true;
    return (
      <Fragment>
        <h1 className="myH1">Hello App</h1>
        <User rang={style ? "txtB" : "txtG"} />
      </Fragment>
    );
  }
}
