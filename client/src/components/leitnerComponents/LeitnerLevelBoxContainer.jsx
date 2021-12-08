import React from "react";
import LeitnerLevelBox from "./LeitnerLevelBox";
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
  COLOR6,
  COLOR7,
} from "../../colors";

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
          }}
        ></div>
      );
    }

    return boxes;
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplate: `
          ". . . . ." 10px
          ". deck1 . deck2 ." 60px
          ". box1 . color1 ." 50px
          ". box2 . color2 ." 50px
          ". box3 . color3 ." 50px
          ". box4 . color4 ." 50px
          ". box5 . color5 ." 50px
          ". box6 . color6 ." 50px
          ". box7 . color7 ." 50px
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
        //style={{ gridArea: "deck" }}
        area="deck1"
      />

      <LeitnerLevelBox
        style={{ gridArea: "box1" }}
        quantity={box1}
        boxNumber="1"
        widthHeight="40px"
        area="box1"
      />

      {/* <div
        style={{
          backgroundColor: "red",
          width: "30px",
          height: "30px",
          gridArea: "color1",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "yellow",
          width: "30px",
          height: "30px",
          gridArea: "color2",
        }}
      ></div> */}
      {renderColorBoxes()}

      <LeitnerLevelBox
        quantity={box2}
        boxNumber="2"
        widthHeight="40px"
        area="box2"
      />
      <LeitnerLevelBox
        quantity={box3}
        boxNumber="3"
        widthHeight="40px"
        area="box3"
      />
      <LeitnerLevelBox
        quantity={box4}
        boxNumber="4"
        widthHeight="40px"
        area="box4"
      />
      <LeitnerLevelBox
        quantity={box5}
        boxNumber="5"
        widthHeight="40px"
        area="box5"
      />
      <LeitnerLevelBox
        quantity={box6}
        boxNumber="6"
        widthHeight="40px"
        area="box6"
      />
      <LeitnerLevelBox
        quantity={box7}
        boxNumber="7"
        widthHeight="40px"
        area="box7"
      />
    </div>
  );
};
export default LeitnerLevelBoxContainer;
