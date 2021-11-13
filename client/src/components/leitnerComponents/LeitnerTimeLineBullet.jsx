import React from "react";

const LeitnerTimeLineBullet = ({ bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "40%",
        height: "40%",
        borderRadius: "50%",
        alignSelf: "center",
        justifySelf: "center",
      }}
    ></div>
  );
};

export default LeitnerTimeLineBullet;
