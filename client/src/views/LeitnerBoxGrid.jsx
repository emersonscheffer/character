import React from "react";

const LeitnerBoxGrid = () => {
  //columns in layout
  const cols = 8;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(" + cols + ", 1fr)",
        gridTemplateRows: "25px 90px 65px auto",
        gridTemplateAreas:"header header header header"
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          //height: "25px",
          gridColumn: "1/" + (cols + 1),
          gridRow: "1/2",
        }}
      >
        first stripe
      </div>

      <div
        style={{
          backgroundColor: "blue",
          //height: "90px",
          gridColumn: "1/" + (cols + 1),
          gridRow: "2/3",
        }}
      >
        timeline
      </div>

      <div
        style={{
          backgroundColor: "green",
          //height: "250px",
          gridColumn: "1/" + 2,
          gridRow: "3/4",
        }}
      >
        side left panel current deck name / SQ
      </div>

      <div
        style={{
          backgroundColor: "pink",
          //height: "90px",
          gridColumn: "2/8",
          gridRow: "3/4",
        }}
      >
        central controller / study button
      </div>

      <div
        style={{
          backgroundColor: "red",
          height: "auto",
          gridColumn: "2/8",
          gridRow: "4",
        }}
      >
        canvas
      </div>

      <div
        style={{
          backgroundColor: "white",
          height: "auto",
          gridColumn: "8/9",
          gridRow: "3/4",
        }}
      >
        right side / list
      </div>
    </div>
  );
};
export default LeitnerBoxGrid;
