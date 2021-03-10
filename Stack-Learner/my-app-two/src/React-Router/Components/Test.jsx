import React from "react";
import { Link } from "react-router-dom";

const Test = ({ match }) => {
  //   console.log(props);
  return (
    <>
      <h1>hello i am Test Com{match.params.postId}</h1>
      <Link to="/">Back To Home </Link>
    </>
  );
};

export default Test;
