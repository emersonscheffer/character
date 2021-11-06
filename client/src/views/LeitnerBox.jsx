import React from "react";

import LeitnerTimeLine from "../components/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineButton from "../components/LeitnerTimeLineButton";

const LeitnerBox = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <LeitnerTimeLine />
      <LeitnerTimeLineDayIndicator />
      <LeitnerTimeLineButton />
    </div>
  );
};

export default LeitnerBox;
