import React, { Component } from "react";

export default class UncontrolledForm extends Component {
  submitHanler = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.password = e.target.password.value;
    console.log(data);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHanler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
