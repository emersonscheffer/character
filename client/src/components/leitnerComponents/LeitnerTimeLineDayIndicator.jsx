import React from "react";
import LeitnerTimeLineDayIndicatorSq from "./LeitnerTimeLineDayIndicatorSq";

const LeitnerTimeLineDayIndicator = ({ leitnerDay }) => {
  const indicator = () => {
    let indicatorLine = [];
    for (let i = 0; i < 64; i++) {
      indicatorLine.push(
        <LeitnerTimeLineDayIndicatorSq
          key={i}
          selected={leitnerDay === i + 1 ? true : false}
        />
      );
    }
    return indicatorLine;
  };

  return (
    <div
      style={{
        backgroundColor: "lightGray",
        width: "100%",
        height: "100%",
        gridArea: "indicator",
        display: "grid",
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(1, 1fr)",
      }}
    >
      {indicator()}
    </div>
  );
};

export default LeitnerTimeLineDayIndicator;
