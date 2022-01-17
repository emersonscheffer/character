import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LevelBoxContainer from "../components/leitnerComponents/LevelBoxContainer";
import TimeLine from "../components/leitnerComponents/TimeLine";

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
          ". . . . . . . . ." 15px
          ". timeline timeline timeline timeline timeline timeline timeline ." 100px
          ". decks_display . . . . . . ." 80px
          ". level_boxes . . . . . . ." auto
          / 15px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 15px
        `,
      }}
    >
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}

      <TimeLine leitnerDay={50} />

      {/*      DECKS DISPLAY      */}
      {/*      DECKS DISPLAY      */}
      {/*      DECKS DISPLAY      */}

      <div
        style={{ gridArea: "decks_display", backgroundColor: " blue " }}
      ></div>

      {/*     SIDE LEVEL BOXES      */}
      {/*     SIDE LEVEL BOXES      */}
      {/*     SIDE LEVEL BOXES      */}

      <LevelBoxContainer />
    </div>
  );
};

export default LeitnerBox;
