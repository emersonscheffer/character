//

import { UserClass } from "../classes/userClass";
import { ADD_CARD, LOAD_STATE } from "./types";

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
