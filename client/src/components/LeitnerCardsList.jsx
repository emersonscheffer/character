import React from "react";
import LeitnerCardInList from "./LeitnerCardInList";

const LeitnerCardList = () => {
  return (
    <div style={{ backgroundColor: "gray", width: "200px", height: "500px" }}>
      <LeitnerCardInList />
      <LeitnerCardInList />
      <LeitnerCardInList />
      <LeitnerCardInList />
    </div>
  );
};

export default LeitnerCardList;
