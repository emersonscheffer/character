import React from "react";
import LeitnerLevelBox from "./LeitnerLevelBox";

const LeitnerLevelBoxContainer = () => {
  return (
    <div
      style={{ backgroundColor: "lightblue", width: "100%", height: "100%" }}
    >
      <LeitnerLevelBox
        quantity="100"
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject="English"
      />

      <LeitnerLevelBox quantity="100" boxNumber="1" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="2" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="3" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="4" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="5" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="6" widthHeight="40px" />
      <LeitnerLevelBox quantity="100" boxNumber="7" widthHeight="40px" />
    </div>
  );
};
export default LeitnerLevelBoxContainer;
