import React from "react";

const LeitnerAddCardButton = ({ openCloseModal, displayBtn }) => {
  return (
    <div
      onClick={openCloseModal}
      style={{
        display: displayBtn ? "none" : "block",
        width: "40px",
        height: "25px",
        backgroundColor: "darkblue",
        color: "white",
        gridColumn: "8/9"
      }}
    >
      +
    </div>
  );
};

export default LeitnerAddCardButton;
