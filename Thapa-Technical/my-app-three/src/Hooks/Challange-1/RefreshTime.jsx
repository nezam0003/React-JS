import React, { useState } from "react";
import { Button } from "reactstrap";
import classes from "../App.module.css";

const RefreshTime = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const getTimeOnRefresh = () => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };
  return (
    <div className={classes.mainContent}>
      <h1>{currentTime}</h1>
      <Button onClick={getTimeOnRefresh} color="warning">
        Get Time
      </Button>
    </div>
  );
};

export default RefreshTime;
