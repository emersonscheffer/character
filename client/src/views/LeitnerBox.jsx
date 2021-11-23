import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineButton from "../components/leitnerComponents/LeitnerTimeLineButton";
import LeitnerCardsList from "../components/leitnerComponents/LeitnerCardsList";
import LeitnerAddCardModal from "../components/leitnerComponents/LeitnerAddCardModal";
import LeitnerAddCardButton from "../components/leitnerComponents/LeitnerAddCardButton";
import LeitnerCard from "../components/leitnerComponents/LeitnerCard";

import {
  loadSavedState,
  addCardToDeckAction,
} from "../actions/leitnerBoxActions";

import { Card } from "../classes/cardClass";
import LeitnerFirstStripe from "../components/leitnerComponents/LeitnerFirstStripe";
import LeitnerEmptySpace from "../components/leitnerComponents/LeitnerEmptySpace";

const LeitnerBox = () => {
  const dispatch = useDispatch();
  const { deck } = useSelector((state) => state.leitnerBox);

  

  const currentTodayDate = new Date();
  const todayDay = currentTodayDate.getDate();
  const todayMonth = currentTodayDate.getMonth();

  // MODAL
  // open close modal
  const [displayModal, setDisplayModal] = useState(false); // set its value to false
  const openCloseModal = () => {
    setDisplayModal(!displayModal);
  };

  const addCardToDeck = (card) => {
    let newCard = new Card();
    newCard.title = card.cardTitle;
    newCard.formality = card.cardFormality;
    newCard.meaning = card.cardMeaning;
    newCard.example1 = card.cardExample1;
    newCard.example2 = card.cardExample2;
    newCard.example3 = card.cardExample3;
    dispatch(addCardToDeckAction(newCard));
  };

  // MODAL END

  // Flip Card
  const [flipCard, setFlipCard] = useState(true);
  const flipCardFn = () => {
    setFlipCard(!flipCard);
  };

  // compare date with the saved one,

  // localStorage.setItem(
  //   "mdat",
  //   JSON.stringify({
  //     name: "mig",
  //     leitnerDay: 1,
  //     currentDay: 1,
  //     currentMonth: 1,
  //     studyStarted: false
  //   })
  // );
  //const [buttonStatus, setButtonStatus] = useState(false);

  const mDat = JSON.parse(localStorage.getItem("mdat"));

  const [leitnerDay, setLeitnerDay] = useState(0);
  //const [leitnerDay, setLeitnerDay] = useState(mDat["leitnerDay"]);
  if (mDat) {
    if (mDat["leitnerDay"]) {
      //setLeitnerDay(mDat["leitnerDay"]);
    }
    if (todayMonth === mDat["currentMonth"]) {
      if (todayDay === mDat["currentDay"]) {
        console.log("got here");
        //disable button here

        // run buttonDisable function
        //setButtonStatus(true);
      } else {
        // button status : Able -  button pressed moves leitnerDay to next day and save in localStorage
        console.log("got here 2 - different day");
        // run buttonAble function
        //setButtonStatus(false);
      }
    } else {
      // if studyStarted === false
      // start study
      // else
      // move to next day and save new leitnerDay
      // save new date in local storage
      // localStorage.setItem(
      //   "mdat",
      //   JSON.stringify({
      //     name: "mig",
      //     leitnerDay: 1,
      //     currentDay: todayDay,
      //     currentMonth: todayMonth,
      //     studyStarted: false,
      //   })
      // );
    }
  } else {
    // localStorage.setItem(
    //   "mdat",
    //   JSON.stringify({
    //     name: "mig",
    //     leitnerDay: 1,
    //     currentDay: todayDay,
    //     currentMonth: todayMonth,
    //     studyStarted: false,
    //   })
    // );
  }

  // press study button
  const pressedMe = () => {
    setLeitnerDay(leitnerDay > 63 ? 1 : leitnerDay + 1);

    localStorage.setItem(
      "mdat",
      JSON.stringify({
        currentDay: todayDay,
        currentMonth: todayMonth,
        deck: deck,
        leitnerDay: leitnerDay + 1,
        studyStarted: false,
        userName: "mig",
      })
    );
  };

  const numberOfColumnsInLayout = 8;

  return (
    <div
      style={{
        //marginTop: "40px"
        display: "grid",

        gridTemplateColumns: "repeat(" + numberOfColumnsInLayout + ", 1fr)",
        width: "900px",

        backgroundColor: "teal",
      }}
    >
      <LeitnerAddCardModal
        displayModal={displayModal}
        openCloseModal={() => openCloseModal()}
        addCardToDeck={addCardToDeck}
      />
      <LeitnerFirstStripe />

      <LeitnerEmptySpace
        gridCol="1/9" // change to use dynamic numbers here
        height="15px"
      />
      <LeitnerTimeLine leitnerDay={leitnerDay} />
      <LeitnerTimeLineDayIndicator leitnerDay={leitnerDay} />

      <LeitnerEmptySpace
        gridCol="1/9" // change to use dynamic numbers here
        height="15px"
      />

      <LeitnerTimeLineButton
        pressedMe={pressedMe}
        isDisabled={false}
        buttonTxt={"Study"}
      />


<LeitnerAddCardButton
        openCloseModal={openCloseModal}
        displayBtn={displayModal}
      />

      <LeitnerEmptySpace gridCol="1/9" height="15px"/>

      {/* to be  replaced by Canvas, then add component into it*/}
      <LeitnerCard
        flipFn={() => flipCardFn()}
        frontSide={flipCard}
        cardTitle="Pick Any Up"
        cardFormality={5}
      />

      
      <LeitnerCardsList cardList={deck} />
    </div>
  );
};

export default LeitnerBox;
