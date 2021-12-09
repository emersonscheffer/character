import React from "react";
import { COLOR1 } from "../../colors";

const LeitnerLevelBox = ({
  quantity,
  boxNumber,
  widthHeight,
  bgColor,
  deck,
  subject,
  area,
  colorD
}) => {
  const line2 = deck ? subject : "Box " + boxNumber;

  return (
    <div
      style={{
        width: widthHeight,
        height: widthHeight,
        justifySelf: "center",
          alignSelf: "center",
        border: "solid 2px" + colorD,
        backgroundColor: bgColor,
        borderRadius: "5px",
        gridArea: area,
        display: "grid",
        gridTemplate: `
        "number" 80%
        "title" 20%
        `,
      }}
    >
      <h1
        style={{
          gridArea: "number",
          justifySelf: "center",
          alignSelf: "center",
          
        }}
      >
        {quantity}
      </h1>
      <h2
        style={{
          fontSize: "9px",
          gridArea: "title",
          justifySelf: "center",
          alignSelf: "center",
          //backgroundColor: "green",
        }}
      >
        {line2}
      </h2>
    </div>
  );
};

export default LeitnerLevelBox;
