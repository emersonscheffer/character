import React, { useState } from "react";

import "../../css/secondGradeMathCard.css";

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

const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

const SecondGradeMathCard = ({ btnGood, btnAgain, cardBtnFn, currentCard }) => {
  const [revealAnswer, setRevealAnswer] = useState(false);

  let math = {
    id: 2,
    prompt: "Add Numbers",
    number1: 5,
    number2: 10,
    operation: "addition",
    answer: 15,
    level: 1,
  };

  math = currentCard;

  const btnFn = (btnText) => {
    setRevealAnswer(false);
    cardBtnFn.bind(this, btnText);
  };

  const btnFn1 = (btnText) => {
    console.log("caller 1");
  };
  const btnFn2 = (btnText) => {
    cardBtnFn(btnText);
    setRevealAnswer(false);
  };

  const renderMathSign = (sign) => {
    switch (sign) {
      case "addition":
        return "+";

      default:
        break;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightGray",
        width: "500px",
        height: "auto",
        display: "grid",
        gridTemplate: `
        ". ....... . ......... . ....... . . . ...... ." 10px
        ". prompt prompt prompt .  ..... .. . . level ." 30px
        ". ....... . ......... . ....... . . . ...... ." 10px
        ". ....... . ......... . ....... . . . timer ." 30px
        ". number1 . operation . number2 . equal . answer ." 100px
        ". ....... . ......... . ....... . . . ...... ." 10px
        ". ....... . ......... . again-btn . . . good-btn ." 50px
        ". ....... . ......... . ....... . . . ...... ." 10px
        / 5px 1fr 10px 50px 10px 1fr 10px 50px 10px 1fr 5px
         `,
      }}
    >
      <div style={{ gridArea: "prompt", fontSize: "18px", fontWeight: "bold" }}>
        {math.prompt}
      </div>

      <div
        className="number-holder"
        style={{
          gridArea: "number1",
          fontSize: "75px",
          fontWeight: "bold",
          display: "grid",
        }}
      >
        <h1 style={{ justifySelf: "center", alignSelf: "center" }}>
          {math.number1}
        </h1>
      </div>

      {/*     OPERATION SIGN     */}
      {/*     OPERATION SIGN     */}
      <div
        style={{
          gridArea: "operation",
          fontSize: "48px",
          fontWeight: "bold",
          backgroundColor: "gray",
          display: "grid",
        }}
      >
        <h1 style={{ justifySelf: "center", alignSelf: "center" }}>
          {renderMathSign(math.operation)}
        </h1>
      </div>

      {/*     EQUAL SIGN     */}
      {/*     EQUAL SIGN     */}
      <div
        style={{
          gridArea: "equal",
          fontSize: "48px",
          fontWeight: "bold",
          backgroundColor: "gray",
          display: "grid",
        }}
      >
        <h1 style={{ justifySelf: "center", alignSelf: "center" }}>=</h1>
      </div>

      <div
        className="number-holder"
        style={{
          gridArea: "number2",
          fontSize: "75px",
          fontWeight: "bold",
          display: "grid",
        }}
      >
        <h1 style={{ justifySelf: "center", alignSelf: "center" }}>
          {math.number2}
        </h1>
      </div>

      {/*    ANSWER    */}
      {/*    ANSWER    */}
      <div
        onClick={() => setRevealAnswer(true)}
        className="number-holder answer"
        style={{
          gridArea: "answer",
          fontSize: "75px",
          fontWeight: "bold",
          display: "grid",
        }}
      >
        <div
          style={{
            justifySelf: "center",
            alignSelf: "center",
            width: "100%",
            height: "100%",
            display: "grid",
          }}
        >
          <h1 style={{ justifySelf: "center", alignSelf: "center" }}>
            {revealAnswer ? math.answer : "?"}
          </h1>
        </div>
      </div>

      <div
        id="level"
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: colorsArr[math.level - 1],
          display: "grid",
          gridArea: "level",
        }}
      >
        <h1
          style={{
            alignSelf: "center",
            justifySelf: "center",
            fontWeight: "bold",
            fontSize: "11px",
            fontFamily: "arial, helvetica",
          }}
        >
          Level {math.level}
        </h1>
      </div>

      <div
        className="good-btn"
        onClick={() => {
          btnFn2("Good");
        }}
        style={{
          width: "70px",
          height: "50px",
          backgroundColor: "green",
          gridArea: "good-btn",
        }}
      >
        Good
      </div>

      <div
        className="again-btn"
        onClick={() => {
          btnFn2("Again");
        }}
        style={{
          width: "70px",
          height: "50px",
          // backgroundColor: "pink",
          gridArea: "again-btn",
        }}
      >
        Again
      </div>
    </div>
  );
};

export default SecondGradeMathCard;
