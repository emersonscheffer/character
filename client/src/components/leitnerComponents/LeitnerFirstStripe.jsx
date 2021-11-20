import React, { useState } from "react";

const LeitnerFirstStripe = () => {
  const color1 = "#232323";
  const color2 = "#acacac"
  const [fontColor, setFontColor] = useState(color1);
  const changeFontColorWhenMouseOverOrOut = () => {
    setFontColor(fontColor === color2 ? color1 : color2);
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.5)",
        gridColumn: "1/9",
        display: "grid",
        height: "40px",
      }}
    >
      <h1
        style={{
          alignSelf: "center",
          justifySelf: "end",
          paddingRight: "40px",
          fontSize: "0.7rem",
          color: color1,
          fontFamily: "monospace",
          fontWeight: "bold"
        }}
      >
        Good Morning{" "}
        <span
          onClick={() => console.log("Student")}
          onMouseOver={() => changeFontColorWhenMouseOverOrOut()}
          onMouseOut={() => changeFontColorWhenMouseOverOrOut()}
          style={{
            color: fontColor,
          }}
        >
          Student
        </span>
      </h1>
    </div>
  );
};

export default LeitnerFirstStripe;
