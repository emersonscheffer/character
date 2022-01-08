import React from "react";

const LeitnerTimeLineNumber = ({ tlNumber, leitnerDay }) => {
  return (
    <div
      style={{
        backgroundColor: leitnerDay ? "lightGray" : null,
        width: "100%",
        height: "100%",
        alignSelf: "center",
        display: "grid",
        
        
        
      }}
    >
      <h1
        style={{ fontSize: "8px", justifySelf: "center", alignSelf: "center" }}
      >
        {tlNumber}
      </h1>
    </div>
  );
};

export default LeitnerTimeLineNumber;
