import React from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    MY Name is : {fName} Last Name : {lName}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
