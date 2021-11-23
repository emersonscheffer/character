import React from "react";
import LeitnerLevelBox from "./LeitnerLevelBox";

const LeitnerLevelBoxContainer = ({ deck, boxes }) => {
  const box1 = boxes[0].length;
  const box2 = boxes[1].length;
  const box3 = boxes[2].length;
  const box4 = boxes[3].length;
  const box5 = boxes[4].length;
  const box6 = boxes[5].length;
  const box7 = boxes[6].length;

  const deckQuantity =
    deck.length - box1 - box2 - box3 - box4 - box5 - box6 - box7;

  return (
    <div
      style={{ backgroundColor: "lightblue", width: "100%", height: "100%" }}
    >
      <LeitnerLevelBox
        quantity={deckQuantity}
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject="English"
      />

      <LeitnerLevelBox quantity={box1} boxNumber="1" widthHeight="40px" />
      <LeitnerLevelBox quantity={box2} boxNumber="2" widthHeight="40px" />
      <LeitnerLevelBox quantity={box3} boxNumber="3" widthHeight="40px" />
      <LeitnerLevelBox quantity={box4} boxNumber="4" widthHeight="40px" />
      <LeitnerLevelBox quantity={box5} boxNumber="5" widthHeight="40px" />
      <LeitnerLevelBox quantity={box6} boxNumber="6" widthHeight="40px" />
      <LeitnerLevelBox quantity={box7} boxNumber="7" widthHeight="40px" />
    </div>
  );
};
export default LeitnerLevelBoxContainer;
