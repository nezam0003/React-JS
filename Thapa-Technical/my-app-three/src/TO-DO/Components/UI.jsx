import React from "react";
import { Button, Input } from "reactstrap";
import classes from "../Todo.module.css";

const UI = () => {
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.centerDiv}>
          <h1 className="text-center bg-dark text-white py-2">TO-DO List</h1>
          <div className="d-flex px-3">
            <Input className="mr-2" type="text" placeholder="Enter Item" />
            <Button color="success">
              <i class="fas fa-plus"></i>
            </Button>
          </div>
          <div className="px-3 mt-4">
            <ol style={{ color: "#6983aa", fontWeight: "bold" }}>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
