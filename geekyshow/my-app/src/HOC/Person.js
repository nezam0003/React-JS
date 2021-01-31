import React, { Component } from "react";
import Army from "./withArms";
class Person extends Component {
  render() {
    return (
      <div>
        <h1>Camp: {this.props.camp}</h1>
        <h2 onMouseOver={this.props.hocgunshotshandler}>
          {this.props.hocgunname} Person Gun shots: {this.props.hocgunshots}
        </h2>
      </div>
    );
  }
}
export default Army(Person, 10);
