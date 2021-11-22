import React from "react";

const LeitnerTimeLineSideMenu = () => {
  return (
    <div
      style={{
        //backgroundColor: "green",
        gridArea: "sideMenu",
        display: "grid",
        gridTemplateRows: "repeat(8, 1fr)",
        fontSize: "9px",
      }}
    >
      <h1 style={sideStyle}>Days</h1>
      <h1 style={sideStyle}>Box 1</h1>
      <h1 style={sideStyle}>Box 2</h1>
      <h1 style={sideStyle}>Box 3</h1>
      <h1 style={sideStyle}>Box 4</h1>
      <h1 style={sideStyle}>Box 5</h1>
      <h1 style={sideStyle}>Box 6</h1>
      <h1 style={sideStyle}>Box 7</h1>
    </div>
  );
};

const sideStyle = {
  paddingRight: "10%",
  borderBottom: "solid 1px black",
  alignSelf: "center",
  justifySelf: "end",
  boxSizing: "border-box",
};

export default LeitnerTimeLineSideMenu;
