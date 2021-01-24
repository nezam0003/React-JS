// import React, { Component, Fragment } from "react";
// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h2> Hello React </h2>
//         <h2> Hello WOrld </h2>
//       </Fragment>
//     );
//   }
// }
// export default App;

// Composing component
// import React from "react";
// import Student from "./Student";
// const App = () => {
//   return (
//     <div>
//       <Student name="Nezam" />
//       <Student name="Reshme" />
//       <Student name="Fhameed" />
//     </div>
//   );
// };
// export default App;

import React, { Component } from "react";
import Student1 from "./Student1";

export default class App extends Component {
  render() {
    console.log("App -Rendered [child of Mounting(Student)]");
    return (
      <div>
        <h1>hello, {this.props.name}</h1>
        <Student1 />
      </div>
    );
  }
}
