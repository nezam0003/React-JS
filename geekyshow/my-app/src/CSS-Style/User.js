import React, { Component, Fragment } from "react";

export default class User extends Component {
  render() {
    return (
      <Fragment>
        <h1 className={this.props.rang}>hello users</h1>
      </Fragment>
    );
  }
}
