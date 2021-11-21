import React from "react";

import LeitnerFirstStripe from "../components/leitnerComponents/LeitnerFirstStripe";
import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";

const LeitnerBoxGrid = () => {
  //columns in layout
  //const cols = 8;
  return (
    <div
      style={{
        display: "grid",
        // gridTemplateColumns: "repeat(" + cols + ", 1fr)",
        // gridTemplateRows: "25px 90px 65px auto",
        // gridTemplateAreas:"header header header header"
        gridTemplate: `
          "stripe stripe stripe" 25px
          "timeline timeline timeline" 110px
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
          gridArea: "stripe",
        }}
      >
        <LeitnerFirstStripe />
      </div>

      <div
        style={{
          backgroundColor: "blue",
          gridArea: "timeline",
          display: "grid",
          gridTemplate: `
            "left timeline" 80%
            "left indicator" 20%
            / 90px 1fr
          `,
        }}
      >
        <LeitnerTimeLine />
        <LeitnerTimeLineDayIndicator />
      </div>

      <div
        style={{
          backgroundColor: "green",
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
