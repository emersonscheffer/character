import React, { useState } from "react";

//import { ReactComponent as Logo } from '../../svgs/redform.svg'

const SelectDeckModal = ({ decks, selectFn }) => {
  const [bg, setBg] = useState("red");

  const testFn = (a) => {
    selectFn(a)
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
            onMouseEnter={() => setBg("blue")}
            onMouseLeave={() => setBg("red")}
            onClick={() => testFn(i)}
            style={{
              backgroundColor: bg,
              width: "70px",
              height: "100px",
              borderRadius: "10px",
              display: "grid",
              marginBottom: "10px",
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
              
              / 10% 1fr 1fr 1fr 10%
            `,
          }}
        >
          {renderDecks()}
        </div>
      </div>
    </div>
  );
};

export default SelectDeckModal;
