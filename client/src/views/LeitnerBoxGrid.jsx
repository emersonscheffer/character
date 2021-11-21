import React from "react";

const LeitnerBoxGrid = () => {
  //columns in layout
  const cols = 8;
  return (
    <div
      style={{
        display: "grid",
        // gridTemplateColumns: "repeat(" + cols + ", 1fr)",
        // gridTemplateRows: "25px 90px 65px auto",
        // gridTemplateAreas:"header header header header"
        gridTemplate: `
          "stripe stripe stripe" 25px
          "timeline timeline timeline" 90px
          "leftside control rightside" 50px
          "leftside canvas rightside" auto
          "footer footer footer" 25px
          / 1fr 3fr 1fr
        `,
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          //height: "25px",
          //gridColumn: "1/" + (cols + 1),
          //gridRow: "1/2",
          gridArea: "stripe",
        }}
      >
        first stripe
      </div>

      <div
        style={{
          backgroundColor: "blue",
          //height: "90px",
          //gridColumn: "1/" + (cols + 1),
          //gridRow: "2/3",
          gridArea: "timeline",
        }}
      >
        timeline
      </div>

      <div
        style={{
          backgroundColor: "green",
          //height: "250px",
          //gridColumn: "1/" + 2,
          //gridRow: "3/4",
          gridArea: "leftside",
        }}
      >
        side left panel current deck name / SQ
      </div>

      <div
        style={{
          backgroundColor: "pink",
          //height: "90px",
          //gridColumn: "2/8",
          //gridRow: "3/4",
          gridArea: "control",
        }}
      >
        central controller / study button
      </div>

      <div
        style={{
          backgroundColor: "red",
          height: "400px",
          //gridColumn: "2/8",
          //gridRow: "4",
          gridArea: "canvas",
        }}
      >
        canvas
      </div>

      <div
        style={{
          backgroundColor: "white",
          //height: "auto",
          //gridColumn: "8/9",
          //gridRow: "3/4",
          gridArea: "rightside",
        }}
      >
        right side / list
      </div>
      <div style={{ backgroundColor: "grey", gridArea: "footer" }}>footer</div>
    </div>
  );
};
export default LeitnerBoxGrid;
