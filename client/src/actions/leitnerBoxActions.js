//
import { UserClass } from "../classes/userClass";
import {
  ADD_CARD,
  LOAD_STATE,
  CHANGE_NAME,
  INITIAL_CARD_LOAD,
  IS_LIST_EMPTY,
  STUDY_BTN_PRESSED,
  CARD_BTN_PRESSED,
  CHANGE_DAY,
  LOAD_APP
} from "./types";

// cards data from file
const cardsData = require("../cardsData.json");

// all user data from storage
const mdat = JSON.parse(localStorage.getItem("mdat")) || null;

let updatedDeck = mdat ? mdat["deck"] : [];

//const addNewCardsFromDataBase = (list) => {
//console.log(list)
//}

const loadingNewCardsIntoTheDeck = () => {
  if (mdat) {
    // console.log(mdat["deck"]);
    if (mdat["deck"].length === 0) {
      // if deck is empty, copy cards from file
      let user = new UserClass();
      user.deck = cardsData;

      localStorage.setItem("mdat", JSON.stringify(user));
    } else {
      let tempList = [];
      for (let card of mdat["deck"]) {
        //console.log(card, " -<")
        tempList.push(card.title);
      }
      //addNewCardsFromDataBase(tempList)
      //console.log(tempList)
      for (let card of cardsData) {
        //console.log(card.title)
        if (!tempList.includes(card.title)) {
          updatedDeck = [...updatedDeck, card];
        }
      }
    }
  }

  console.log(updatedDeck);

  const newUser = new UserClass();
  newUser.deck = updatedDeck;

  localStorage.setItem("mdat", JSON.stringify(newUser));

  /* 
  
    
    dispatch({type: INITIAL_CARD_LOAD, payload: cardsData})
  
  
  */
}; // end of loadingNewCardsIntoTheDeck

loadingNewCardsIntoTheDeck();

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
  //const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
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

























export const loadSavedStateOrStartNewUser = () => (dispatch) => {
  if (mdat) {
    console.log("load successful");

    //dispatch and change localstorage
    dispatch({ type: LOAD_STATE, payload: mdat });
  } else {

    const newUser = new UserClass();
    newUser.deck = cardsData;
    localStorage.setItem("mdat", JSON.stringify(newUser));

    dispatch({ type: INITIAL_CARD_LOAD, payload: cardsData });
    
  }
};


























//let fruits = ["Apple", "Mango", "Orange", "Pear"];
let currentStudying = [];

export const studyButtonAction = () => (dispatch) => {
  // get quantity of cards from "deck array" , and add to "current stydying array"
  // for (let i = 0; i < quantity; i++) {
  //   currentStudying.push(fruits.shift());
  // }

  //console.log(currentStudying, " = current Studying");

  //isCurrentStudyingEmpty()
  // dispatch({ type: IS_LIST_EMPTY, payload: false})

  // if current studying array is NOT empty
  // button is disabled

  // get number of cards from deck and load cards in the current Array to display cards in order
  //console.log("pressed study btn");

  dispatch({ type: STUDY_BTN_PRESSED });
};

export const cardButtonsActions = (btnPressed) => (dispatch) => {
  dispatch({ type: CARD_BTN_PRESSED, payload: btnPressed });
};

// this function is to watch current number of cards in current studying
export const isCurrentStudyingEmpty = () => (dispatch) => {
  console.log("got here is current");

  //send info to reducer
  // if current studying array is empty
  if (currentStudying.length === 0) {
    dispatch({ type: IS_LIST_EMPTY, payload: true });
  } else {
    dispatch({ type: IS_LIST_EMPTY, payload: false });
  }
};

export const changeDay = () => (dispatch) => {
  dispatch({ type: CHANGE_DAY });
};

export const loadApp = () => (dispatch) => {
  dispatch({ type: LOAD_APP });
};

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
