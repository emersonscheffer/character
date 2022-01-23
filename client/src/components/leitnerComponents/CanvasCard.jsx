import React from "react";

const CanvasCard = ({ area, studying, btnFnGood }) => {
  let st = studying[0];
  let title2 = "- >";

  if (studying.length > 0) {
    title2 = studying[0].subject;
  }

  return (
    <div style={{ backgroundColor: "blue", gridArea: area }}>
      {studying.length === 0 ? (
        <div style={{}}>
          <h1>You're all caught up</h1>
        </div>
      ) : (
        <div>
          {title2}

          <div
            onClick={btnFnGood.bind(this, "Good")}
            style={{ width: "70px", height: "50px", backgroundColor: "green" }}
          >
            Good
          </div>

          <div
            onClick={btnFnGood.bind(this, "Again")}
            style={{ width: "70px", height: "50px", backgroundColor: "pink" }}
          >
            Again
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasCard;
