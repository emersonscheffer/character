import React from "react";
import LeitnerCardInList from "./LeitnerCardInList";

const LeitnerCardList = ({ cardList }) => {
  const renderCards = () => {
    let cardsArr = [];

    for (let i = 0; i < cardList.length; i++) {
      cardsArr.push(
        <LeitnerCardInList
          key={cardList[i].title}
          cardTitle={cardList[i].title}
          cardLevel={cardList[i].level}
        />
      );
    }

    return cardsArr;
  };

  return (
    <div style={{ backgroundColor: "gray", width: "200px", height: "500px" }}>
      {renderCards()}
    </div>
  );
};

export default LeitnerCardList;
