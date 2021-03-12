import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { fName, lName } = useParams();
  return (
    <h1>
      hello {fName} {lName} page
    </h1>
  );
};

export default User;
