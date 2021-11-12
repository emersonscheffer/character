import React from "react";

const LeitnerCard = ({
  fn,
  btnFn1,
  btnFn2,
  frontSize,
  cardTitle,
  cardFormality,
}) => {
  return (
    <div
      onClick={fn}
      style={{
        backgroundColor: "grey",
        width: "450px",
        height: "350px",
        border: "5px solid rgb(255,255,255,0.5)",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(10, 1fr)",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          display: "grid",
          gridRow: "1/2",
          gridColumn: "5/7",
          width: "100%",
          height: "100%",
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
          Level 1
        </h1>
      </div>
      <h1
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "35px",
          gridColumn: "1/7",
          gridRow: "5/7",
          display: frontSize ? "block" : "none",
        }}
      >
        {cardTitle}
      </h1>
      <h2
        style={{
          display: frontSize ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "7/8",
        }}
      >
        Formality: {cardFormality}
      </h2>

      {/* // back */}

      <h1
        style={{
          display: !frontSize ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "3/4",
        }}
      >
        {cardTitle}
      </h1>
      <h1
        style={{
          display: !frontSize ? "block" : "none",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
          fontWeight: "bolder",
          fontSize: "15px",
          gridColumn: "1/7",
          gridRow: "4/5",
        }}
      >
        Meaning of word or expression
      </h1>
      <h2
        style={{
          display: !frontSize ? "block" : "none",
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
      </h2>
      <h2
        style={{
          display: !frontSize ? "block" : "none",
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
      </h2>
      <h2
        style={{
          display: !frontSize ? "block" : "none",
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
      </h2>

      <div
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
      </div>
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
