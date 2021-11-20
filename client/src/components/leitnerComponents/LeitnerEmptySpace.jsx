import React from "react";

const LeitnerEmptySpace = ({ width, height, gridCol, gridRow }) => {
  return (
    <div
      style={{ height: height, gridColumn: gridCol, backgroundColor: "orange" }}
    ></div>
  );
};

export default LeitnerEmptySpace;
