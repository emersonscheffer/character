//
import { Deck } from "../classes/deckClass";
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
  LOAD_APP,
  UPDATE_USER,
  INITIAL_USER
} from "./types";

// string to variable
const mdat = "mdat";

const decks = [] // hold all of my decks from database

// cards data from file
const englishCardsData = require("../englishCardsData.json");

let englishDeck = new Deck("english")
englishDeck.addFullDeck(englishCardsData)

decks.push(englishDeck)




let storedUser = JSON.parse(localStorage.getItem(mdat)) || null;

console.log(storedUser, " from actions ->")

// console.log(decks[0].subject)





// all user data from storage
const storedMdat = JSON.parse(localStorage.getItem(mdat)) || null; // delete this one

let updatedDeck = storedMdat ? storedMdat["deck"] : [];

//const addNewCardsFromDataBase = (list) => {
//console.log(list)
//}

const loadingNewCardsIntoTheDeck = () => {
  if (storedMdat) {
    if (storedMdat["deck"].length === 0) {
      // if deck is empty, copy cards from file
      let user = new UserClass();
      user.deck = englishCardsData;

      localStorage.setItem(mdat, JSON.stringify(user));
    } else {
      let tempList = [];
      for (let card of storedMdat["deck"]) {
        //console.log(card, " -<")
        tempList.push(card.title);
      }
      //addNewCardsFromDataBase(tempList)
      //console.log(tempList)
      for (let card of englishCardsData) {
        //console.log(card.title)
        if (!tempList.includes(card.title)) {
          updatedDeck = [...updatedDeck, card];
        }
      }
    }
  }

  console.log(updatedDeck);
  console.log("adding cards into deck");

  const newUser = new UserClass();
  newUser.deck = updatedDeck;

  let englishDeck = new Deck("english");
  englishDeck.addFullDeck(updatedDeck);

  newUser.decks = [englishDeck];

  localStorage.setItem(mdat, JSON.stringify(newUser));

  /* 
  
    
    dispatch({type: INITIAL_CARD_LOAD, payload: cardsData})
  
  
  */
}; // end of loadingNewCardsIntoTheDeck

// loadingNewCardsIntoTheDeck();

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
  updatedUser.updateDay(storedMdat["currentDay"]);
  updatedUser.updateMonth(storedMdat["currentMonth"]);
  updatedUser.updateLeitnerDay(storedMdat["leitnerDay"]);
  updatedUser.updateStudyStarted(storedMdat["studyStarted"]);
  updatedUser.updateUserName(storedMdat["userName"]);

  if (storedMdat) {
    const deck = storedMdat["deck"];
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

      localStorage.setItem(mdat, JSON.stringify(updatedUser));

      dispatch({ type: ADD_CARD, payload: card });
    }
  }
};



const updateUser = (key, data) => dispatch => {
  let userData = new UserClass();

  userData.updateCanvasLoaded(storedUser["canvasLoaded"]);
  userData.updateCurrentDay(storedUser["currentDay"]);
  userData.updateCurrentMonth(storedUser["currentMonth"]);
  userData.updateCurrentStudying(storedUser["currentStudying"]);
  userData.updateDecks(storedUser["decks"]);
  userData.updateLeitnerDay(storedUser["leitnerDay"]);
  userData.updateSavedDay(storedUser["savedDay"]);
  userData.updateSavedMonth(storedUser["savedMonth"]);
  userData.updateSelectedDeck(storedUser["selectedDeck"]);
  userData.updateStudyButtonActive(storedUser["studyButtonActive"]);
  userData.updateStudyStarted(storedUser["studyStarted"]);
  userData.updateUserName(storedUser["userName"]);

  switch (key) {
    case "canvasLoaded":
      userData.updateCanvasLoaded(data);
      break;
    case "currentDay":
      userData.updateCurrentDay(data);
      break;
    case "currentMonth":
      userData.updateCurrentMonth(data);
      break;
    case "currentStudying":
      userData.updateCurrentStudying(data);
      break;
    case "decks":
      userData.updateDecks(data);
      break;
    case "leitnerDay":
      userData.updateLeitnerDay(data);
      break;
    case "savedDay":
      userData.updateSavedDay(data);
      break;
    case "savedMonth":
      userData.updateSavedMonth(data);
      break;
    case "selectedDeck":
      userData.updateSelectedDeck(data);
      break;
    case "studyButtonActive":
      userData.updateStudyButtonActive(data);
      break;
    case "studyStarted":
      userData.updateStudyStarted(data);
      break;
    case "userName":
      userData.updateUserName(data);
      break;

    default:
      break;
  }


  localStorage.setItem( mdat, JSON.stringify(userData) )

  
  dispatch({ type: UPDATE_USER, payload: userData})

};










export const loadSavedStateOrStartNewUser = () => (dispatch) => {

  if (storedUser) {
    console.log("load successful = from actions");

    //updateUser("userName", "Pearl Jam");
    //dispatch and change localstorage
    dispatch({ type: LOAD_STATE, payload: storedUser });

  } else {
    // create a new user from scratch and add the english cards database

    const newUser = new UserClass();

    newUser.decks = decks

    localStorage.setItem(mdat, JSON.stringify(newUser));

    dispatch({ type: INITIAL_USER, payload: decks });
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
