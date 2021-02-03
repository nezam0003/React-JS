import React, { Component } from "react";

export default class Input extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
    gender: "",
    agree: false,
    skills: [],
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  showBioData = (e) => {
    console.log(this.state);
  };
  checkboxhandler = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };
  skillHandler = (e) => {
    // console.log("hello");
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const skills = this.state.skills.filter((skill) => skill !== e.target.value);
      this.setState({ skills });
    }
  };
  render() {
    const { name, country, bio, birthday, agree, skills } = this.state;
    return (
      <div>
        <input
          onChange={this.changeHandler}
          className="form-control my-2"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
        />
        <select
          onChange={this.changeHandler}
          className="form-control my-2"
          name="country"
          value={country}
        >
          <option>Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Srilanka">Srilanka</option>
          <option value="Nepal">Nepal</option>
        </select>
        <textarea
          onChange={this.changeHandler}
          className="form-control my-2"
          name="bio"
          placeholder="say something"
          value={bio}
        ></textarea>
        <input
          onChange={this.changeHandler}
          className="form-control my-2"
          type="date"
          name="birthday"
          value={birthday}
        />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={this.changeHandler}
          />
          Male
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={this.changeHandler}
          />
          Female
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="other"
            onChange={this.changeHandler}
          />
          Other
        </div>
        <div>
          Skills: <br />
          <input
            type="checkbox"
            name="skills"
            value="java"
            checked={skills.includes("java")}
            onChange={this.skillHandler}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="javascript"
            checked={skills.includes("javascript")}
            onChange={this.skillHandler}
          />
          javascript
          <input
            type="checkbox"
            name="skills"
            value="python"
            checked={skills.includes("python")}
            onChange={this.skillHandler}
          />
          python
          <input
            type="checkbox"
            name="skills"
            value="php"
            checked={skills.includes("php")}
            onChange={this.skillHandler}
          />
          php
        </div>
        <div className="form-check">
          <input type="checkbox" name="agree" checked={agree} onChange={this.checkboxhandler} />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to all terms and conditions
          </label>
        </div>

        <button onClick={this.showBioData} className="btn-outline-primary btn-block mt-2">
          Show Data
        </button>
      </div>
    );
  }
}
