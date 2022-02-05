import React, { useState, useEffect } from "react";

const TimerCard = ({ timerInput }) => {
  const [time, setTime] = useState(timerInput);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div
      style={{
        width: "150px",
        height: "80px",
        backgroundColor: "lightgray",
        display: "grid",
        gridTemplate: `
        ". ... . ... . ... . " 10%
        ". min . sec . mil . " 40%
        ". ... . ... . ... . " 10%
        ". bt1 . bt2 . bt3 . " 40%
        /1% 1fr 1% 1fr 1% 1fr 1% 
        `,
      }}
    >
      <div style={{ gridArea: "min" }}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </div>
      <div style={{ gridArea: "sec" }}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </div>
      <div style={{ gridArea: "mil" }}>
        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
      </div>

      {!timerOn && time === timerInput && (
        <button style={{ gridArea: "bt1" }} onClick={() => setTimerOn(true)}>
          Start
        </button>
      )}

      {timerOn && (
        <button style={{ gridArea: "bt2" }} onClick={() => setTimerOn(false)}>
          Stop
        </button>
      )}

      {!timerOn && time !== timerInput && (
        <button style={{ gridArea: "bt2" }} onClick={() => setTimerOn(true)}>
          Resume
        </button>
      )}
      {!timerOn && time > timerInput && (
        <button style={{ gridArea: "bt3" }} onClick={() => setTime(0)}>
          Reset
        </button>
      )}
    </div>
  );
};

export default TimerCard;
