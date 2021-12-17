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

const LeitnerLevelBoxContainer = ({ cDeck }) => {
  const boxQuantities = [

    // cDeck.box1.length,
    // cDeck.box2.length,
    // cDeck.box3.length,
    // cDeck.box4.length,
    // cDeck.box5.length,
    // cDeck.box6.length,
    // cDeck.box7.length,
    // cDeck.retiredBox.length,
    1,2, 3, 4, 5, 6, 7, 8
    
  ];

  const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

  const deckQuantity = 10;

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
        //quantity={deckQuantity}
        quantity={20} //cDeck.store.length
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject={"en"}//cDeck.subject
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
