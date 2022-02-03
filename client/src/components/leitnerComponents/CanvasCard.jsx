import React from "react";
import SecondGradeMathCard from "./SecondGradeMathCard";

const CanvasCard = ({ area, studying, btnFnGood }) => {
  let current = studying[0];
  let title2 = "- >";

  if (studying.length > 0) {
    title2 = studying[0].subject;
  }

  return (
    <div style={{ backgroundColor: "blue", gridArea: area }}>
      {studying.length === 0 ? (
        <div style={{}}>
          <h1>You're all caught up</h1>
          <h1>
            Press the study button, if it isn't available today, check back
            tomorrow
          </h1>
        </div>
      ) : (
        <div>
          <SecondGradeMathCard
            cardBtnFn={(t) => btnFnGood(t)}
            currentCard={current}
          />

          {/* <div
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
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CanvasCard;
