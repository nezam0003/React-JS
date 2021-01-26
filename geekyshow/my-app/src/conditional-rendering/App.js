// import React, { Component } from "react";
// import User from "./User";
// import Guest from "./Guest";

// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;
//     if (!isRegistered) {
//       return <User />;
//     }
//     return <Guest />;
//   }
// }

/************ Inline if logical && operator ********** */
// import React, { Component, Fragment } from "react";
// import User from "./User";

// export default class App extends Component {
//   render() {
//     const primeMember = this.props.primeMember;
//     return (
//       <Fragment>
//         <h1>Welcome User</h1>
//         {primeMember && <User />}
//       </Fragment>
//     );
//   }
// }

/************ if-else operator ********** */
import React, { Component, Fragment } from "react";
import User from "./User";
import Guest from "./Guest";
export default class App extends Component {
  state = {
    isLoggedIn: false,
  };
  logIn = () => {
    this.setState({ isLoggedIn: true });
  };
  logOut = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // if (isLoggedIn) {
    //   return <User clickLogOut={this.logOut} />;
    // } else {
    //   return <Guest clickLogIn={this.logIn} />;
    // }

    // Inline statement
    // return (
    //   <Fragment>
    //     {isLoggedIn ? <User clickLogOut={this.logOut} /> : <Guest clickLogIn={this.logIn} />}
    //   </Fragment>
    // );

    // IIFE
    return (
      <Fragment>
        {(() => {
          if (isLoggedIn) {
            return <User clickLogOut={this.logOut} />;
          } else {
            return <Guest clickLogIn={this.logIn} />;
          }
          //   isLoggedIn ? <User clickLogOut={this.logOut} /> : <Guest clickLogIn={this.logIn} />;
        })()}
      </Fragment>
    );
  }
}
