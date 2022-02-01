import React from "react";

const SecondGradeMathCard = ({ btnGood, btnAgain }) => {
  const math = {
    id: 2,
    prompt: "Add Numbers",
    number1: 5,
    number2: 10,
    operation: "addition",
    answer: 15,
    level: 1,
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
        height: "200px",
        display: "grid",
        gridTemplate: `
        ". ...... ...... ..... ." 10px
        ". prompt prompt level ." 30px
        ". ...... ...... ..... ." 10px
        ". .... ........ timer ." 30px
        ". number1 operation number2 ." 40px
        / 5px 1fr 1fr 1fr 5px
         `,
      }}
    >
      <div style={{ gridArea: "prompt", fontSize: "18px", fontWeight: "bold" }}>
        {math.prompt}
      </div>

      <div
        style={{ gridArea: "number1", fontSize: "18px", fontWeight: "bold" }}
      >
        {math.number1}
      </div>

      <div
        style={{ gridArea: "operation", fontSize: "18px", fontWeight: "bold" }}
      >
        {renderMathSign(math.operation)}
      </div>

      <div
        style={{ gridArea: "number2", fontSize: "18px", fontWeight: "bold" }}
      >
        {math.number2}
      </div>

      

      <div
      id="level"
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "pink",
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
    </div>
  );
};

export default SecondGradeMathCard;
