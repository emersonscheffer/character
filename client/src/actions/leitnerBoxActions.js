//

import { UserClass } from "../classes/userClass";
import { ADD_CARD, LOAD_STATE, CHANGE_NAME } from "./types";

// ------ >  > > >    >  make it work later, as for right now nothing is happening
export const changeUserName = (newName) => (dispatch) => {
  // change name in database here
  //const changing = localStorage.setItem("nameApp", "Emerson")
  new Promise(function (res, dec) {
    //localStorage.setItem("nameApp", "Emerson");
  }).then(
    //if name changed successfully
    // after name changed in the database , send it to redux state
    dispatch({ type: CHANGE_NAME, payload: newName })
  );
};

export const addCardToDeckAction = (card) => (dispatch) => {
  // check if card is in the deck
  const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
  let updatedUser = new UserClass();
  updatedUser.updateDay(mdat["currentDay"]);
  updatedUser.updateMonth(mdat["currentMonth"]);
  updatedUser.updateLeitnerDay(mdat["leitnerDay"]);
  updatedUser.updateStudyStarted(mdat["studyStarted"]);
  updatedUser.updateUserName(mdat["userName"]);

  if (mdat) {
    const deck = mdat["deck"];
    let containInDeck = false;
    if (deck) {
      for (let i = 0; i < deck.length; i++) {
        if (deck[i]["title"] === card["title"]) {
          console.log("repeat = = = = =");
          containInDeck = true;
        }
        updatedUser.insertCard(deck[i]);
      }
    }

    if (!containInDeck) {
      updatedUser.insertCard(card);
      // localStorage.setItem(
      //   "mdat",
      //   JSON.stringify({
      //     deck: deck ? [...deck, card] : [card],
      //   })
      // );

      localStorage.setItem("mdat", JSON.stringify(updatedUser));

      dispatch({ type: ADD_CARD, payload: card });
    }
  }
};

export const loadSavedState = () => (dispatch) => {
  const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
  if (mdat) {
    console.log("load successful");

    //dispatch and change localstorage
    dispatch({ type: LOAD_STATE, payload: mdat });
  } else {
    console.log("empty initial state or failed to retrieve");
    const newUser = new UserClass();
    localStorage.setItem("mdat", JSON.stringify(newUser));
  }
};

export const studyButtonAction = () => (dispatch) => {
  console.log("pressed study btn")
}

// const pressedMe = () => {
//   setLeitnerDay(leitnerDay > 63 ? 1 : leitnerDay + 1);

//   localStorage.setItem(
//     "mdat",
//     JSON.stringify({
//       currentDay: todayDay,
//       currentMonth: todayMonth,
//       deck: deck,
//       leitnerDay: leitnerDay + 1,
//       studyStarted: false,
//       userName: "mig",
//     })
//   );
// };