import React from "react";

import LeitnerTimeLineBullet from "./LeitnerTimeLineBullet";

const LeitnerTimeLineBullets = ({ bulletColor, interval }) => {
  return (
    <div style={{ display: "grid" }}>
      <LeitnerTimeLineBullet bgColor={interval ? bulletColor : null} />
    </div>
  );
};

export default LeitnerTimeLineBullets;
