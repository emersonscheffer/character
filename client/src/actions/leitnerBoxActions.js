//
import { UserClass } from "../classes/userClass";
import { ADD_CARD, LOAD_STATE, CHANGE_NAME , INITIAL_CARD_LOAD} from "./types";

// cards data from file
const cardsData = require("../cardsData.json");

// all user data from storage
const mdat = JSON.parse(localStorage.getItem("mdat")) || null;

const loadingNewCardsIntoTheDeck = () => {
  if (mdat) {
    // console.log(mdat["deck"]);
    if (mdat["deck"].length === 0) {
      // if deck is empty, copy cards from file
      let user = new UserClass();
      user.deck = cardsData;

      localStorage.setItem("mdat", JSON.stringify(user));
      
    } else {
      let tempList = []
      for (let card of cardsData) {
    
        if(card.title === "Resume"){
          console.log(card.title)
        }
        
      }

    }
  }

  

  //console.log(mdat);
};

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
    newUser.deck = cardsData
    localStorage.setItem("mdat", JSON.stringify(newUser));
    
    dispatch({type: INITIAL_CARD_LOAD, payload: cardsData})
  }
};

export const studyButtonAction = () => (dispatch) => {
  console.log("pressed study btn");
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
