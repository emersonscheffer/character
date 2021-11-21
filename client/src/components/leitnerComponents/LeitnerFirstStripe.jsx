import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeUserName } from "../../actions/leitnerBoxActions";

const LeitnerFirstStripe = () => {
  const dispatch = useDispatch();

  const changeUserNameInDataBase = (newName) => {
    dispatch(changeUserName(newName));
  };

  const color1 = "#232323";
  const color2 = "#656565";
  const [fontColor, setFontColor] = useState(color1);
  const changeFontColorWhenMouseOverOrOut = () => {
    setFontColor(fontColor === color2 ? color1 : color2);
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.5)",
        //gridColumn: "1/9",
        display: "grid",
        height: "100%",
        width: "100%",
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
          fontWeight: "bold",
        }}
      >
        Good Morning{" "}
        <span
          onClick={() => changeUserNameInDataBase()}
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
