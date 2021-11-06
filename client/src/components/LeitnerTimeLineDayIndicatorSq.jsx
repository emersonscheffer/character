import React from "react";

const LeitnerTimeLineDayIndicatorSq = ({ selected }) => {
  return (
    <div
      style={{
        //backgroundColor: "green",
        width: "90%",
        height: "90%",
        alignSelf: "center",
        justifySelf: "center",
        display: "grid",
      }}
    >
      {selected ? (
        <div
          style={{
            //backgroundColor: "red",
            width: "0",
            height: "0",
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom:"16px solid red",
            alignSelf: "center",
            justifySelf: "center",
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default LeitnerTimeLineDayIndicatorSq;
