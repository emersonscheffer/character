import React from "react";
import LeitnerCardButton from "./LeitnerCardButton";
import LeitnerCardFlipButton from "./LeitnerCardFlipButton";

const LeitnerCard = ({
  flipFn,
  btnFn1,
  btnFn2,
  frontSide,
  cardTitle,
  cardFormality,
  cardDisplay,
}) => {
  const renderExamples = (examples) => {
    let examplesArr = [];

    for (let example of examples) {
      examplesArr.push(<h2>- {example}</h2>);
    }

    return examplesArr;
  };

  return (
    <div
      style={{
        backgroundColor: "#e3e3e3",
        width: "90%",
        height: "350px",
        //border: "5px solid rgb(225,225,225)",
        borderRadius: "5px",
        display: "grid",
        gridTemplate: ` 
          " . . . . . ." 10px
          ". . . . level ." 30px
          ". line line line line ." 15px
          ". title title title title ." auto
          ". meaning meaning meaning meaning ." auto
          ". example example example example ." auto
          ". . btn1 btn2 . ." 40px
          " . . . . . ." 10px
          / 10px 1fr 1fr 1fr 1fr 10px
           `,
        boxShadow: "2px 2px 5px",
        justifySelf: "center",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          display: "grid",
          gridArea: "level",
          width: "90%",
          height: "90%",
          alignSelf: "center",
          justifySelf: "center",
          borderRadius: "7px",
        }}
      >
        <h1
          style={{
            alignSelf: "center",
            justifySelf: "center",
            color: "white",
            fontFamily: "helvetica",
            fontWeight: "bolder",
          }}
        >
          Level {cardDisplay.level}
        </h1>
      </div>

      <div
        style={{
          gridArea: "line",
          backgroundColor: "red",
          borderRadius: "10px",
          height: "30%",
          alignSelf: "center",
        }}
      ></div>

      <h1
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "35px",
          //gridColumn: "1/7",
          //gridRow: "5/7",
          display: frontSide ? "block" : "none",
        }}
      >
        {cardDisplay.title}
      </h1>
      <h2
        style={{
          display: frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          //gridColumn: "1/7",
          //gridRow: "7/8",
        }}
      >
        Formality: {cardDisplay.formality}
      </h2>

      {/* // back */}

      <h1
        style={{
          display: !frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridArea: "title",
        }}
      >
        {cardDisplay.title}
      </h1>
      <h1
        style={{
          display: !frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          //gridColumn: "1/7",
          //gridRow: "4/5",
          gridArea: "meaning",
        }}
      >
        {/* Meaning of word or expression */}
        {cardDisplay.meaning}
      </h1>
      {/* <h2
        style={{
          display: !frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "6/7",
        }}
      >
        Example 1
      </h2> */}
      {/* <h2
        style={{
          display: !frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "7/8",
        }}
      >
        Example 2
      </h2> */}
      {/* <h2
        style={{
          display: !frontSide ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "8/9",
        }}
      >
        Example 3
      </h2> */}
      <div style={{ gridArea: "example" }}>
        {renderExamples(cardDisplay.examples)}
      </div>

      {/* <div
        onClick={btnFn1}
        style={{
          display: !frontSize ? "block" : "none",
          width: "90%",
          height: "85%",
          backgroundColor: "green",
          gridRow: "10/11",
          gridColumn: "2/4",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        Again
      </div>
      <div
        onClick={btnFn2}
        style={{
          display: !frontSize ? "block" : "none",
          width: "90%",
          height: "85%",
          backgroundColor: "green",
          gridRow: "10/11",
          gridColumn: "4/6",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        Next
      </div> */}

      <LeitnerCardButton
        frontSide={frontSide}
        gridArea="btn1"
        btnTxt={"Again"}
        btnFn={() => console.log("hiihihihih")}
      />
      <LeitnerCardButton
        frontSide={frontSide}
        gridArea="btn2"
        btnTxt={"Good"}
        btnFn={() => console.log("hiihihihih")}
      />

      <LeitnerCardFlipButton flipFn={flipFn} />
    </div>
  );
};

export default LeitnerCard;

//     this.title = title;
//     this.front = front;
//     this.back = back;
//     this.level = 1
//     this.examples = []
//     this.formality = 5
