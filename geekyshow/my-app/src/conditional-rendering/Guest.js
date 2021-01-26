// import React, { Component } from "react";
// class Guest extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Guest</h1>
//         <button>Sign Up</button>
//         <button>Login</button>
//       </div>
//     );
//   }
// }
// export default Guest;

/************ if-else operator ********** */
import React, { Component, Fragment } from "react";

export default class Guest extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome Guest</h1>
        <button onClick={this.props.clickLogIn}>Login</button>
        <button>Sign in</button>
      </Fragment>
    );
  }
}
