// import React, { Component } from "react";
// class User extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello user...</h1>
//         <button>LogOut</button>
//       </div>
//     );
//   }
// }
// export default User;

/*********** Inline if logical && operator ********** */
// import React, { Component } from "react";

// export default class User extends Component {
//   render() {
//     return <h3>Prime Member</h3>;
//   }
// }

/************ if-else operator ********** */
import React, { Component, Fragment } from "react";

export default class User extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello User</h1>
        <button onClick={this.props.clickLogOut}>Logout</button>
      </Fragment>
    );
  }
}
