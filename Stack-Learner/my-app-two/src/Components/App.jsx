import React, { Component, Fragment } from "react";
import Bio from "./Profile/Bio";
import Profile from "./Profile/index";
import Skills from "./Profile/Skills";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Profile />
        <div className="container">
          <Bio name="Test User Name" title="Test User Title" />
          <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Programmer Skills: </h3>
          <p>MR. X</p>
          <Skills skillA="Java" skillB="JavaScript" skillC="Python" skillD="Node" skillE="PHP" />
          <p>MR. Y</p>
          <Skills
            skillA="ExpressJS"
            skillB="TypeScript"
            skillC="NextJS"
            skillD="Ruby"
            skillE="Laravel"
          />
        </div>
      </Fragment>
    );
  }
}
