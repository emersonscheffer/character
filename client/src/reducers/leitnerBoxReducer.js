import {
  LOAD_STATE,
  ADD_CARD,
  INITIAL_CARD_LOAD,
  IS_LIST_EMPTY,
  STUDY_BTN_PRESSED,
  CARD_BTN_PRESSED,
  CHANGE_DAY,
  LOAD_APP,
  INITIAL_USER,
  SELECT_DECK,
  SHOW_SELECT_MODAL,
} from "../actions/types";

import { CurrentQueue } from "../classes/CurrentQueue";
import { Deck } from "../classes/deckClass";
import { UserClass } from "../classes/userClass";

const initialState = {
  showSelectDeckModal: false,

  canvasLoaded: false,
  currentDay: 0,
  currentMonth: 0,

  decks: [new Deck()],

  savedDay: 0,
  savedMonth: 0,

  selectedDeck: 0,

  studyButtonActive: true,

  studyStarted: false,

  userName: "",
};

const daysMap = {
  1: 1,
  2: 2,
  3: 1,
  4: 3,
  5: 1,
  6: 2,
  7: 1,
  8: 4,
  9: 1,
  10: 2,
  11: 1,
  12: 3,
  13: 1,
  14: 2,
  15: 1,
  16: 5,
  17: 1,
  18: 2,
  19: 1,
  20: 3,
  21: 1,
  22: 2,
  23: 1,
  24: 4,
  25: 1,
  26: 2,
  27: 1,
  28: 3,
  29: 1,
  30: 2,
  31: 1,
  32: 6,
  33: 1,
  34: 2,
  35: 1,
  36: 3,
  37: 1,
  38: 2,
  39: 1,
  40: 4,
  41: 1,
  42: 2,
  43: 1,
  44: 3,
  45: 1,
  46: 2,
  47: 1,
  48: 5,
  49: 1,
  50: 2,
  51: 1,
  52: 3,
  53: 1,
  54: 2,
  55: 1,
  56: 4,
  57: 1,
  58: 2,
  59: 1,
  60: 3,
  61: 1,
  62: 2,
  63: 1,
  64: 7,
};

function areAllBoxesEmpty() {
  const allBoxes = [
    initialState.boxLevel1,
    initialState.boxLevel2,
    initialState.boxLevel3,
    initialState.boxLevel4,
    initialState.boxLevel5,
    initialState.boxLevel6,
    initialState.boxLevel7,
  ];

  function checkEmptyBoxes(a) {
    if (a < 1) {
      return true;
    }

    if (allBoxes[a - 1].length > 0) {
      return false;
    }

    checkEmptyBoxes(a - 1);
  }

  checkEmptyBoxes(7);
}

// function checkBoxesAndAddItemsIntoCurrent(leitnerDay) {
//   let current = [];

//   const allBoxes = [
//     initialState.boxLevel1,
//     initialState.boxLevel2,
//     initialState.boxLevel3,
//     initialState.boxLevel4,
//     initialState.boxLevel5,
//     initialState.boxLevel6,
//     initialState.boxLevel7,
//   ];

//   function checkBox(b) {
//     if (b < 1) {
//       return;
//     }
//     current = [...current, ...allBoxes[b - 1]];
//     checkBox(b - 1);
//   }

//   // for (const day in days) {

//   checkBox(daysMap[leitnerDay]);

//   //console.log("leitner day from inside function : ", leitnerDay);

//   return current;
// }

function sameDay(month1, day1, month2, day2) {
  if (month1 === month2) {
    if (day1 === day2) {
      return true;
    }
  }

  return false;
}

// const addCardsIntoCurrentStudyingArray = () => {
//   initialState.currentStudying = [...initialState.boxLevel1]
// }

export default function myState(state = initialState, action) {
  switch (action.type) {
    case INITIAL_USER:
      return {
        ...state,
        decks: action.payload,
      };

    case LOAD_APP:
      return {
        ...state,
        studyButtonActive: sameDay(
          state.currentMonth,
          state.currentDay,
          state.savedMonth,
          state.savedDay
        )
          ? false
          : state.decks[state.selectedDeck].currentStudying.store.length === 0
          ? true
          : false,
      };
    case INITIAL_CARD_LOAD:
      return {
        ...state,
        deck: action.payload,
      };

    case LOAD_STATE:
      //const tempCurrentStudying = new CurrentQueue()
      //tempCurrentStudying.addArr(action.payload["currentStudying"].store)

      return {
        ...state,
        canvasLoaded: action.payload["canvasLoaded"],
        currentDay: action.payload["currentDay"],
        currentMonth: action.payload["currentMonth"],
        // currentStudying: tempCurrentStudying,
        decks: action.payload["decks"],
        leitnerDay: action.payload["leitnerDay"],
        savedDay: action.payload["savedDay"],
        savedMonth: action.payload["savedMonth"],
        selectedDeck: action.payload["selectedDeck"],
        studyButtonActive: action.payload["studyButtonActive"],
        studyStarted: action.payload["studyStarted"],
        userName: action.payload["userName"],
      };

    // case ADD_CARD:
    //console.log(action.payload)

    // if card is already in deck, option 1 - try editing card, card is already in the deck, return previous state
    // else
    // return {
    //   ...state,
    //   deck: [...state.deck, action.payload],
    // };

    case STUDY_BTN_PRESSED:
      // timeline
      // -> if first time
      // -> start study
      // -> timeline cursor -> set as day 1 or next day

      // let day = state.leitnerDay;
      // if (state.studyStarted) {
      //   day = state.leitnerDay + 1;
      //   if (day === 65) {
      //     day = 1;
      //   }
      // }

      // let day = state.studyStarted ? state.leitnerDay + 1 : state.leitnerDay;

      // cards from deck
      // -> get number of cards from current deck and add 'em to current studying array
      // -> change the level of the card from 0 to level 1 before inserting in current deck array
      let activeButtonVar = false;
      // if (state.deck.length === 0) {
      //   //check if any cards left in all 7 boxes
      //   if (!areAllBoxesEmpty()) {
      //     // studyButtonDisabledStatusVar = true;
      //   }
      // }
      // for (let i = 0; i < state.quantityOfCardsToAdd; i++) {
      //   let card = state.deck.shift();
      //   if (card) {
      //     card.level = 1;
      //     state.boxLevel1.push(card);
      //   }
      // }

      //addCardsIntoCurrentStudyingArray()
      //state.currentStudying = state.boxLevel1
      // for (let j = 0; j < state.boxLevel1.length; j++) {
      //   state.currentStudying.add(state.boxLevel1[j]);
      // }

      //state.currentStudying.addArr(checkBoxesAndAddItemsIntoCurrent(day));

      // button status
      // -> disable button until all cards are studied
      // -> disable button until next day / different day than current

      return {
        ...state,

        // savedMonth:
        //   state.deck.length === 0 ? state.currentMonth : state.savedMonth,
        // savedDay: state.deck.length === 0 ? state.currentDay : state.savedDay,

        studyButtonActive: activeButtonVar,

        leitnerDay: action.payload,
        //studyStarted: true,

        // check if items were added to Queue
        // if so , loaded canvas = true
        //canvasLoaded: state.currentStudying.isEmpty() ? false : true,
      };

    case CARD_BTN_PRESSED:
      let workingDeck = state.decks[state.selectedDeck];
      let card = workingDeck.currentStudying.store.shift();

      switch (card.level) {
        case 1:
          workingDeck.box1.shift();
          break;
        case 2:
          workingDeck.box2.shift();
          break;
        case 3:
          workingDeck.box3.shift();
          break;
        case 4:
          workingDeck.box4.shift();
          break;
        case 5:
          workingDeck.box5.shift();
          break;
        case 6:
          workingDeck.box6.shift();
          break;
        case 7:
          workingDeck.box7.shift();
          break;
        default:
          break;
      }

      // if good btn is pressed
      // -> change level of card to +1
      // -> save card in DB
      // -> delete card from 'queue'
      if (action.payload === "good") {
        card.level = card.level + 1;

        switch (card.level) {
          case 2:
            workingDeck.box2.push(card);
            break;
          case 3:
            workingDeck.box3.push(card);
            break;
          case 4:
            workingDeck.box4.push(card);
            break;
          case 5:
            workingDeck.box5.push(card);
            break;
          case 6:
            workingDeck.box6.push(card);
            break;
          case 7:
            workingDeck.box7.push(card);
            break;
          case 8:
            workingDeck.retiredBox.push(card);
            break;

          default:
            console.log("called default state  - check whats wrong");
            workingDeck.box1.push(card);
            break;
        }
      } else {
        // if again btn is pressed
        // -> change level of card to 1
        // -> send card to end of queue in current studying
        card.level = 1;
        workingDeck.box1.push(card);
        workingDeck.currentStudying.store.push(card);
      }

      let theUser = new UserClass();
      theUser.updateCanvasLoaded(state.canvasLoaded);
      theUser.updateCurrentDay(state.currentDay);
      theUser.updateCurrentMonth(state.currentMonth);
      theUser.updateDecks(state.decks);
      theUser.updateSavedDay(state.savedDay);
      theUser.updateSavedMonth(state.savedMonth);
      theUser.updateSelectedDeck(state.selectedDeck);
      theUser.updateStudyButtonActive(state.studyButtonActive);
      theUser.updateStudyStarted(state.studyStarted);
      theUser.updateUserName(state.userName);

      localStorage.setItem("mdat", JSON.stringify(theUser));

      return {
        ...state,
        //

        savedMonth: state.currentMonth,
        savedDay: state.currentDay,

        //canvasLoaded: state.currentStudying.isEmpty() ? true : false,

        // studyButtonActive: state.currentStudying.isEmpty()
        //   ? sameDay() ? false : true
        //   :  false,
      };

    case IS_LIST_EMPTY:
      return { ...state, studyButtonActive: !action.payload };

    case CHANGE_DAY:
      console.log("changing day from reducer");
      let dayTemp = state.currentDay + 1;
      return {
        ...state,
        currentDay: dayTemp,
      };

    case SELECT_DECK:
      return {
        ...state,
        selectedDeck: action.payload,
        showSelectDeckModal: false,
        studyStarted: true
      };
    case SHOW_SELECT_MODAL: {
      return {
        ...state,
        showSelectDeckModal: true,
      };
    }

    default:
      return state;
  }
}
