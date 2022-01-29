import React from "react";
import { Link } from "react-router-dom";

const DecksDisplay = ({ area, decklist, pickDeckFn }) => {
//   const templist = ["science", "engineering"];

  const renderDecks = () => {
    let dex = [];
    for (let i = 0; i < decklist.length; i++) {
      dex.push(
        <div
        key={i}
            onClick={pickDeckFn.bind(this, i)}
          style={{
            width: "35px",
            height: "55px",
            backgroundColor: "blue",
            // margin: "10px",
            boxSizing: "border-box",
            border: "solid black 1px",
          }}
        >
         <h1 style={{ fontSize: "9px" }}> {decklist[i].subject}</h1>
         <h1 style={{ fontSize: "12px" }}> 20 </h1>
        </div>
      );
    }
    return dex;
  };

  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        gridArea: area,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {renderDecks()}
      {/* <button onClick={}>Add Decks</button> */}
      <Link to={"/selectdecks"}>Select</Link>
    </div>
  );
};

export default DecksDisplay;
