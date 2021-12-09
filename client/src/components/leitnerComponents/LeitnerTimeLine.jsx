import React from "react";

import LeitnerTimeLineNumber from "./LeitnerTimeLineNumber";
import LeitnerTimeLineBullets from "./LeitnerTimeLineBullets";

import {
  BACKGROUND,
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
  COLOR6,
  COLOR7,
} from "../../colors";

const LeitnerTimeLine = ({ leitnerDay }) => {
  const timeLineNumbers = () => {
    let arr = [];

    for (let index = 0; index < 64; index++) {
      arr.push(
        <LeitnerTimeLineNumber
          key={index}
          tlNumber={index + 1}
          leitnerDay={leitnerDay === index + 1 ? true : false}
        />
      );
    }

    return arr;
  };

  const bulletCollors = [
    COLOR1,
    COLOR2,
    COLOR3,
    COLOR4,
    COLOR5,
    COLOR6,
    COLOR7,
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
            key={index}
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
        backgroundColor: BACKGROUND,
        width: "100%",
        height: "100%",
        gridArea: "timeline",
        // gridColumn: "1/9",
        display: "grid",
        //borderRadius: "5px",
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {timeLineNumbers()}

      {renderTimeLineBullets()}
    </div>
  );
};

export default LeitnerTimeLine;
