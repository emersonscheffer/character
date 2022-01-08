import React from "react";

import SqDummyWhite from '../../svgs/SqDummyWhite.svg'

const LeitnerTimeLineBullet = ({ bgColor }) => {

  const dimension = 1000 / 64
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: dimension + "px",
        height: dimension + "px",
        borderRadius: "50%",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {/* <img src={SqDummyWhite} width={"100%"} height={"100%"}/> */}
    </div>
  );
};

export default LeitnerTimeLineBullet;
