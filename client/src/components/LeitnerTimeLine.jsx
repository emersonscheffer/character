import React from "react";

import LeitnerTimeLineNumber from "./LeitnerTimeLineNumber";
import LeitnerTimeLineBullets from "./LeitnerTimeLineBullets";

const LeitnerTimeLine = () => {
  let selectedDay = 25;

  const timeLineNumbers = () => {
    let arr = [];

    for (let index = 0; index < 64; index++) {
      arr.push(
        <LeitnerTimeLineNumber
          tlNumber={index + 1}
          selectedDay={selectedDay === index + 1 ? true : false}
        />
      );
    }

    return arr;
  };

  const bulletCollors = [
    "red",
    "blue",
    "green",
    "black",
    "yellow",
    "purple",
    "orange",
  ];

  const intervals = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 32,
    7: 64,
  };

  const renderTimeLineBullets = () => {
    let bullets = [];

    for (let i = 1; i < 8; i++) {
      let bulletsArr = [];
      for (let index = 1; index < 65; index++) {
        bulletsArr.push(
          <LeitnerTimeLineBullets
            bulletColor={bulletCollors[i - 1]}
            interval={index % intervals[i] === 0 ? true : false}
          />
        );
      }
      bullets.push(bulletsArr);
    }
    return bullets;
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "96%",
        height: "140px",
        display: "grid",
        margin: "0 auto",
        borderRadius: "5px",
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
      }}
    >
      {timeLineNumbers()}

      {renderTimeLineBullets()}
    </div>
  );
};

export default LeitnerTimeLine;