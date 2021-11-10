import React from "react";

const LeitnerCardInList = () => {
  return (
    <div
      style={{
        backgroundColor: "#232323",
        color: "white",
        margin: "1px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        height: "65px",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          fontSize: "9px",
          fontWeight: "bold",
          fontFamily: "helvetica",
          gridColumn: "4/5",
          gridRow: "1/2",

          display: "grid",
        }}
      >
        <h1 style={{ alignSelf: "center", justifySelf: "center" }}>Level 1</h1>
      </div>
      <div
        style={{
          gridRow: "2/5",
          gridColumn: "1/5",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <h1>Demure</h1>
      </div>
    </div>
  );
};

export default LeitnerCardInList;
