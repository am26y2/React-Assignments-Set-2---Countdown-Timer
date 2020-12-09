import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [timer, setTimer] = React.useState("");
  const EnterKeyCode = 13;
  const handleEnter = (event) => {
    if (event.keyCode === EnterKeyCode) {
      clearInterval(timerID);
      if (isNaN(event.target.value)) {
        setTimer(0);
        return;
      }
      setTimer(parseInt(event.target.value));
    }
    return;
  };
  const decrease = () => {
    clearInterval(timerID);
    if (timer <= 0) {
      return;
    }
    setTimer((prevValue) => prevValue - 1);
  };
  let timerID = setInterval(decrease, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
