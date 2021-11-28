import React from "react";

const LeitnerCardButton = ({ frontSide, btnTxt, btnFn, gridArea }) => {
  return (
    <div
    onClick={btnFn}
      style={{
        display: !frontSide ? "block" : "none",
        width: "90%",
        height: "85%",
        gridArea: gridArea,
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <div
        
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
          display: "grid",
          borderRadius: "5px",
        }}
      >
        <h1
          style={{
            alignSelf: "center",
            justifySelf: "center",
            fontFamily: "helvetica",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          {btnTxt}
        </h1>
      </div>
    </div>
  );
};

export default LeitnerCardButton;
