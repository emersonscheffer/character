import React, { useState } from "react";

//import { ReactComponent as Logo } from '../../svgs/redform.svg'

const SelectDeckModal = ({ decks, selectFn }) => {
  const colorBg1 = "red"
  const colorBg2 = "blue" 
  const [bg, setBg] = useState("red");

  const [deckSelectedHolder, setDeckSelectedHolder] = useState(0)

  const thumbSelect = (a) => {
    setDeckSelectedHolder(a)
  };

  const selectBtnPressed = ()=> {
    selectFn(deckSelectedHolder)
  }

  const renderDecks = () => {
    let decksArr = [];

    for (let i = 0; i < decks.length; i++) {
      decksArr.push(
        <div
          style={{
            gridArea: String("col").concat(i + 1),
            justifySelf: "center",
          }}
        >
          <div
            //onMouseEnter={() => }
            onMouseLeave={() => setBg("red")}
            onClick={() => thumbSelect(i)}

            style={{
              backgroundColor: colorBg1,
              width: "70px",
              height: "100px",
              borderRadius: "10px",
              display: "grid",
              marginBottom: "10px",
              border: deckSelectedHolder === i ? "black solid 3px" : null
            }}
          >
            <h2
              style={{
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              100
            </h2>
          </div>
          <h1
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "helvetica",
            }}
          >
            {" "}
            {decks[i]}{" "}
          </h1>
        </div>
      );
    }
    return decksArr;
  };

  return (
    <div
      style={{
        display: "block",
        position: "fixed",
        zIndex: "100",
        //paddingTop: "100px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0, 0, 0, 0.3)",
      }}
    >
      <div style={{ height: "100%", width: "100%", display: "grid" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "400px",
            height: "250px",
            justifySelf: "center",
            marginTop: "100px",
            display: "grid",
            gridTemplate: `
              ". ... ... ... ." 40px
              ". col1 col2 col3 ."
              ". ... ... selectBtn ." 40px
              / 10% 1fr 1fr 1fr 10%
            `,
          }}
        >
          {renderDecks()}
          <div
          onClick={()=>selectBtnPressed()}
            style={{
              backgroundColor: "blue",
              gridArea: "selectBtn",
              width: "90%",
              height: "90%",
              justifySelf: "center",
              alignSelf: "center",
              display: "grid",
            }}
          >
            <h1 style={{ justifySelf: "center", alignSelf: "center" }}>
              select
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDeckModal;

const bgStyle = {
  backgroundColor: "green"
}
