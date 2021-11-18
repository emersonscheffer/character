import React from "react";
import LeitnerCardInList from "./LeitnerCardInList";

const LeitnerCardList = ({ cardList }) => {
  const renderCards = () => {
    let cardsArr = [];
    if (cardList) {
      for (let i = 0; i < cardList.length; i++) {
        cardsArr.push(
          <LeitnerCardInList
            key={cardList[i].title}
            cardTitle={cardList[i].title}
            cardLevel={cardList[i].level}
          />
        );
      }
    }

    return cardsArr;
  };

  return (
    <div
      style={{
        backgroundColor: "green",
        width: "100%",
        height: "500px",
        gridColumn: "6/9",
      }}
    >
      {renderCards()}
    </div>
  );
};

export default LeitnerCardList;
