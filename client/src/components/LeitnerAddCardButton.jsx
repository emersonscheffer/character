import React from "react";

const LeitnerAddCardButton = ({ openCloseModal, displayBtn }) => {
  return (
    <div
      onClick={openCloseModal}
      style={{
        display: displayBtn ? "none" : "block",
        width: "120px",
        height: "65px",
        backgroundColor: "darkblue",
        color: "white",
      }}
    >
      +
    </div>
  );
};

export default LeitnerAddCardButton;
