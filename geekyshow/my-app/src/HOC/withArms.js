import React, { Component } from "react";
const Army = (Men, shot) => {
  class NewMan extends Component {
    state = {
      gunshots: 0,
    };
    gunshotsHandler = () => {
      this.setState({ gunshots: this.state.gunshots + shot });
    };
    render() {
      return (
        <Men
          hocgunname="AK47"
          hocgunshots={this.state.gunshots}
          hocgunshotshandler={this.gunshotsHandler}
          {...this.props}
        />
      );
    }
  }
  return NewMan;
};
export default Army;
