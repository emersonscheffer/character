import React from "react";

const LeitnerTimeLineNumber = ({ tlNumber, leitnerDay }) => {
  return (
    <div
      style={{
        backgroundColor: leitnerDay ? "white" : null,
        width: "96%",
        height: "96%",
        alignSelf: "center",
        display: "grid",
        border: leitnerDay ? "solid black 1px" : null,
        borderRadius: "40%",
        boxSizing: "border-box"
      }}
    >
      <h1
        style={{ fontSize: "8px", justifySelf: "center", alignSelf: "center" }}
      >
        {tlNumber}
      </h1>
    </div>
  );
};

export default LeitnerTimeLineNumber;
