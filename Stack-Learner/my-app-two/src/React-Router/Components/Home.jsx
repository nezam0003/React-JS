import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h4>I am Home</h4>
      <Link to="/posts/post-1">post-1</Link>
      <Link to="/posts/post-2">post-2</Link>
      <Link to="/posts/post-3">post-3</Link>
      <Link to="/posts/post-4">post-4</Link>
    </>
  );
};

export default Home;
