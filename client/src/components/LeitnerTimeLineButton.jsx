import React from "react";

const LeitnerTimeLineButton = () => {
  return (
    <div

        onClick={() => console.log("hello m y friend?")}
      style={{
        width: "120px",
        height: "50px",
        backgroundColor: "beige",
        display: "grid",
        margin: "20px"
      }}
    >
      <h1 style={{ alignSelf: "center", justifySelf: "center" }}>Next</h1>
    </div>
  );
};

export default LeitnerTimeLineButton;
