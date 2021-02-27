import React, { useState } from "react";
import { Button } from "reactstrap";
import classes from "../../Style.module.css";

const App = () => {
  const bgColor = "#8e44ad";
  const [backgroundcolor, setBackgroundcolor] = useState(bgColor);
  const [buttonName, setButtonName] = useState("Click Me");

  const backgroundColorChanger = () => {
    let newBg = "#34495e";
    setBackgroundcolor(newBg);
    setButtonName("Double Click to Go Back");
  };
  const backToPreviousBackgroundColor = () => {
    setBackgroundcolor(bgColor);
    setButtonName("Click Me");
  };
  return (
    <div className={classes.mainContent} style={{ backgroundColor: backgroundcolor }}>
      <Button
        onClick={backgroundColorChanger}
        onDoubleClick={backToPreviousBackgroundColor}
        color="warning"
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default App;
