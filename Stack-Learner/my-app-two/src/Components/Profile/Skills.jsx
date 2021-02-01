import React from "react";

const Skills = (props) => {
  return (
    <div className="skills">
      <h3>Skills :</h3>
      <ul>
        <li>{props.skillA}</li>
        <li>{props.skillB}</li>
        <li>{props.skillC}</li>
        <li>{props.skillD}</li>
        <li>{props.skillE}</li>
      </ul>
    </div>
  );
};
export default Skills;
