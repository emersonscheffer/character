import React, { useState } from "react";
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
import { Deck } from "../../classes/deckClass";

const LevelBoxContainer = ({ selectedDeck, showSelectDeckFn }) => {

  // temp fix

  if(!selectedDeck) {
    
    selectedDeck = new Deck()
  }

   // temp fix

  const boxQuantities = [
    selectedDeck.box1.length,
    selectedDeck.box2.length,
    selectedDeck.box3.length,
    selectedDeck.box4.length,
    selectedDeck.box5.length,
    selectedDeck.box6.length,
    selectedDeck.box7.length,
    selectedDeck.retiredBox.length,
  ];

  const [showSelectDeckSettings, setShowSelectDeckSettings] = useState(false)

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
        gridArea: "level_boxes",
        backgroundColor: BACKGROUND,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplate: `
          ". . . . ." 10px
          ". . deck setSel ." 60px
          ". . box1 . ." 40px
          ". . box2 . ." 40px
          ". . box3 . ." 40px
          ". . box4 . ." 40px
          ". . box5 . ." 40px
          ". . box6 . ." 40px
          ". . box7 . ." 40px
          ". . retired . ." 40px
          ". . . . ." 10px
           / 5px 1fr 1fr 1fr 5px 
        `,
      }}
    >

      {
        showSelectDeckSettings ? <div
        onClick={showSelectDeckFn}
        style={{
          gridArea: "setSel",
          backgroundColor: "gray",
          width: "30%",
          height: "30%",
          alignSelf: "end",
          marginBottom: "5px"
        }}
      ></div> : null

      }
      

      <LeitnerLevelBox
        showDeckSettingsFn={() => setShowSelectDeckSettings(!showSelectDeckSettings)}
        quantity={selectedDeck.store.length}
        boxNumber="1"
        widthHeight="50px"
        deck={true}
        subject={selectedDeck.subject}
        area="deck"
        colorD={" black"}
      />

      {renderLevelBoxes()}

      <LeitnerLevelBox
        quantity={selectedDeck.retiredBox.length}
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
export default LevelBoxContainer;
