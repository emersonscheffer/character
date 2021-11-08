import React from "react";

const LeitnerTimeLineButton = ({ pressedMe }) => {
  return (
    <div
      onClick={pressedMe}
      style={{
        width: "120px",
        height: "50px",
        backgroundColor: "beige",
        display: "grid",
        margin: "20px",
      }}
    >
      <h1 style={{ alignSelf: "center", justifySelf: "center" }}>Next</h1>
    </div>
  );
};

export default LeitnerTimeLineButton;
