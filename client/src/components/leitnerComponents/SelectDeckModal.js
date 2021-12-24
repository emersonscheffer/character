import React from "react";

//import { ReactComponent as Logo } from '../../svgs/redform.svg'

const SelectDeckModal = ({ decks }) => {
  const renderDecks = () => {
    let decksArr = [];

    for (let i = 0; i < decks.length; i++) {
      decksArr.push(
        <div>
          <div
            style={{
              backgroundColor: "gray",
              width: "70px",
              height: "100px",
            }}
          >
            100
          </div>
          subject
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
          }}
        >
          {renderDecks()}
        </div>
      </div>
    </div>
  );
};

export default SelectDeckModal;
