import React from "react";
import LeitnerLevelBox from "./LeitnerLevelBox";
import {
  BACKGROUND,
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
  COLOR6,
  COLOR7,
} from "../../colors";

const LeitnerLevelBoxContainer = ({ deck, boxes }) => {
  const boxQuantities = [
    boxes[0].length,
    boxes[1].length,
    boxes[2].length,
    boxes[3].length,
    boxes[4].length,
    boxes[5].length,
    boxes[6].length,
  ];

  const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

  const deckQuantity = deck.length;

  const renderColorBoxes = () => {
    let boxes = [];
    const colors = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];
    for (let i = 0; i < 7; i++) {
      boxes.push(
        <div
          // add a key here
          style={{
            backgroundColor: colors[i],
            width: "30%",
            height: "30%",
            gridArea: String("color").concat(i + 1),
            alignSelf: "center",
            justifySelf: "center",
          }}
        ></div>
      );
    }

    return boxes;
  };

  const renderLevelBoxes = () => {
    let levelBoxes = [];

    for (let i = 0; i < 7; i++) {
      levelBoxes.push(
        <LeitnerLevelBox
          quantity={boxQuantities[i]}
          boxNumber={String(i + 1)}
          widthHeight="32px"
          area={String("box").concat(i + 1)}
          colorD={colorsArr[i]}
        />
      );
    }

    return levelBoxes;
  };

  return (
    <div
      style={{
        backgroundColor: BACKGROUND,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplate: `
          ". . . . ." 10px
          ". deck1 . deck2 ." 60px
          ". box1 . color1 ." 40px
          ". box2 . color2 ." 40px
          ". box3 . color3 ." 40px
          ". box4 . color4 ." 40px
          ". box5 . color5 ." 40px
          ". box6 . color6 ." 40px
          ". box7 . color7 ." 40px
          ". retired . . ." 40px
          ". . . . ." 10px
           / 5px 2fr 5px 1fr 5px 
        `,
      }}
    >
      <LeitnerLevelBox
        quantity={deckQuantity}
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject="English"
        area="deck1"
        colorD={" black"}
      />

      {renderLevelBoxes()}

      {renderColorBoxes()}
    </div>
  );
};
export default LeitnerLevelBoxContainer;
