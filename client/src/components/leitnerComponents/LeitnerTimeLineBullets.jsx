import React from "react";

import LeitnerTimeLineBullet from "./LeitnerTimeLineBullet";

const LeitnerTimeLineBullets = ({ bulletColor, interval, line }) => {
  return (
    <div style={{ display: "grid", backgroundColor: line? "lightGray" : null }}>
      <LeitnerTimeLineBullet bgColor={interval ? bulletColor : null} />
    </div>
  );
};

export default LeitnerTimeLineBullets;
