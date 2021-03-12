import React from "react";
import { useParams, useLocation, Link, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const User = () => {
  const { fName, lName } = useParams();
  const { pathname: location } = useLocation();
  const history = useHistory();
  console.log("location", location);
  console.log("history", history);

  return (
    <>
      <h1>
        hello {fName} {lName} page
      </h1>
      <p>My current Location is : {location}</p>
      {location === `/user/nezam/khan` ? (
        <Button color="danger">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Go to Home
          </Link>
        </Button>
      ) : (
        <Button color="primary" onClick={() => history.goBack()}>
          go Back
        </Button>
      )}
    </>
  );
};

export default User;
