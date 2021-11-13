import React from "react";

const LeitnerCardFlipButton = ({ flipFn }) => {
  return (
    <div
      onClick={flipFn}
      style={{
        backgroundColor: "orange",
        gridColumn: "6/7",
        gridRow: "5/7",
        width: "65%",
        justifySelf: "end",
        border: "5px solid rgb(225,225,225)",
        borderRight: "none",
        boxSizing: "border-box",
        borderRadius: "13px 0 0 13px",
        display: "grid",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        MsUserSelect: "none",
        unselectable: "on"
      }}
    >
      <h1 style={{ justifySelf: "center", alignSelf: "center" }}>flip</h1>
    </div>
  );
};
export default LeitnerCardFlipButton;
