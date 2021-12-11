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
    boxes[7].length
  ];

  const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

  const deckQuantity = deck.length;

  // const renderColorBoxes = () => {
  //   let boxes = [];
  //   const colors = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];
  //   for (let i = 0; i < 7; i++) {
  //     boxes.push(
  //       <div
  //         // add a key here
  //         style={{
  //           backgroundColor: colors[i],
  //           width: "30%",
  //           height: "30%",
  //           gridArea: String("color").concat(i + 1),
  //           alignSelf: "center",
  //           justifySelf: "center",
  //         }}
  //       ></div>
  //     );
  //   }

  //   return boxes;
  // };

  const renderLevelBoxes = () => {
    let levelBoxes = [];

    for (let i = 0; i < 7; i++) {
      levelBoxes.push(
        <LeitnerLevelBox
          key={i}
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
          ". . ." 10px
          ". deck ." 60px
          ". box1 ." 40px
          ". box2 ." 40px
          ". box3 ." 40px
          ". box4 ." 40px
          ". box5 ." 40px
          ". box6 ." 40px
          ". box7 ." 40px
          ". retired ." 40px
          ". . ." 10px
           / 5px 1fr 5px 
        `,
      }}
    >
      <LeitnerLevelBox
        quantity={deckQuantity}
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject="English"
        area="deck"
        colorD={" black"}
      />

      {renderLevelBoxes()}

      <LeitnerLevelBox
        quantity={boxQuantities[7]}
        boxNumber="1"
        widthHeight="35px"
        deck={true}
        subject="Retired"
        area="retired"
        colorD={" black"}
      />
    </div>
  );
};
export default LeitnerLevelBoxContainer;
