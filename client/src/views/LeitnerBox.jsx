import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";

const LeitnerBox = ({ area }) => {
  const dispatch = useDispatch();
  const { deck } = useSelector((state) => state.leitnerBox);

  return (
    <div
      style={{
        gridArea: area,
        display: "grid",
        width: "100%",
        height: "100%",
        backgroundColor: "teal",
        display: "grid",
        gridTemplate: `
          ". . ." 15px
          ". timeline ." auto
          / 15px 1fr 15px
        `,
      }}
    >
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}

      <LeitnerTimeLine />

      {/* <div style={{backgroundColor: "green"}}></div>
      <div style={{backgroundColor: "blue"}}></div>
      <div style={{backgroundColor: "yellow"}}></div> */}
    </div>
  );
};

export default LeitnerBox;
