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

const TimeLine = ({ leitnerDay }) => {
  const timeLineNumbers = () => {
    let arr = [];

    for (let index = 1; index < 65; index++) {
      arr.push(
        <LeitnerTimeLineNumber
          key={index}
          tlNumber={index}
          leitnerDay={leitnerDay === index ? true : false}
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
            line={leitnerDay === index}
          />
        );
      }
      bullets.push(bulletsArr);
    }
    return bullets;
  };

  const renderEmptyLine = () => {
    let emptyLine = [];

    for (let i = 1; i < 65; i++) {
      emptyLine.push(
        <div
          key={i + 1000}
          style={{
            backgroundColor: leitnerDay === i ? "lightgray" : BACKGROUND,
          }}
        ></div>
      );
    }
    return emptyLine;
  };

  const renderIndicatorLine = () => {
    let indicatorLine = [];

    for (let i = 1; i < 65; i++) {
      indicatorLine.push(
        <div
          key={i}
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
            justifySelf: "center",
            display: "grid",
            backgroundColor: leitnerDay === i ? "lightgray" : BACKGROUND,
          }}
        >
          {leitnerDay === i ? (
            <div
              key={i + 100}
              style={{
                width: "0",
                height: "0",
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderBottom: "8px solid red",
                alignSelf: "center",
                justifySelf: "center",
              }}
            ></div>
          ) : null}
        </div>
      );
    }

    return indicatorLine;
  };

  return (
    <div
      id="timeline"
      style={{
        backgroundColor: BACKGROUND,
        width: "100%",
        height: "100%",
        gridArea: "timeline",
        display: "grid",
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(11, 1fr)",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {timeLineNumbers()}

      {renderTimeLineBullets()}

      {renderEmptyLine()}

      {renderIndicatorLine()}

      {renderEmptyLine()}
    </div>
  );
};

export default TimeLine;
