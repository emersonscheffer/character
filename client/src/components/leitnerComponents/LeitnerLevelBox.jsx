import React from "react";

const LeitnerLevelBox = ({
  quantity,
  boxNumber,
  widthHeight,
  bgColor,
  deck,
  subject,
}) => {
  const line2 = deck ? subject : "Box " + boxNumber;

  return (
    <div
      style={{
        width: widthHeight,
        height: widthHeight,
        border: "solid black 1px",
        backgroundColor: bgColor,
        borderRadius: "5px",
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
          //backgroundColor: "red",
          //width: "100%", height: "100%"
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
