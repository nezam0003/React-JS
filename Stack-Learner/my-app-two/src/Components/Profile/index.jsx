import React, { Component } from "react";
import "./profile.css";
import Bio from "./Bio";
import Skills from "./Skills";
import Social from "./Social";

export default class Profile extends Component {
  me = {
    name: "Md Nezam Khan",
    title: "Front-end Web developer and Designer",
    skillA: "HTML",
    skillB: "CSS",
    skillC: "JavaScript",
    skillD: "React",
    skillE: "Bootstrap",
  };
  render() {
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
          skillD={this.me.skillD}
          skillE={this.me.skillE}
        />
        <Social />
      </div>
    );
  }
}
