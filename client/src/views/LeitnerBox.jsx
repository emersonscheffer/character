import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineButton from "../components/leitnerComponents/LeitnerTimeLineButton";
import LeitnerCardList from "../components/leitnerComponents/LeitnerCardsList";
import LeitnerAddCardModal from "../components/leitnerComponents/LeitnerAddCardModal";
import LeitnerAddCardButton from "../components/leitnerComponents/LeitnerAddCardButton";
import LeitnerCard from "../components/leitnerComponents/LeitnerCard";

import {
  loadSavedState,
  addCardToDeckAction,
} from "../actions/leitnerBoxActions";

import { Card } from "../classes/cardClass";

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

  if (mDat) {
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

  const [leitnerDay, setLeitnerDay] = useState(mDat["leitnerDay"]);

  const pressedMe = () => {
    setLeitnerDay(leitnerDay > 63 ? 1 : leitnerDay + 1);

    // localStorage.setItem(
    //   "mdat",
    //   JSON.stringify({
    //     name: "mig",
    //     leitnerDay: leitnerDay + 1,
    //     currentDay: todayDay,
    //     currentMonth: todayMonth,
    //     studyStarted: false,
    //   })
    // );
  };

  useEffect(() => {
    dispatch(loadSavedState());
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <LeitnerAddCardModal
        displayModal={displayModal}
        openCloseModal={() => openCloseModal()}
        addCardToDeck={addCardToDeck}
      />
      <LeitnerTimeLine leitnerDay={leitnerDay} />
      <LeitnerTimeLineDayIndicator leitnerDay={leitnerDay} />
      <LeitnerTimeLineButton
        pressedMe={pressedMe}
        isDisabled={false}
        buttonTxt={"Study"}
      />

      <LeitnerCard
        flipFn={() => flipCardFn()}
        frontSide={flipCard}
        cardTitle="Pick Any Up"
        cardFormality={5}
      />

      <LeitnerAddCardButton
        openCloseModal={openCloseModal}
        displayBtn={displayModal}
      />
      <LeitnerCardList cardList={deck} />
    </div>
  );
};

export default LeitnerBox;
