import {
  LOAD_STATE,
  ADD_CARD,
  INITIAL_CARD_LOAD,
  IS_LIST_EMPTY,
  STUDY_BTN_PRESSED,
  CARD_BTN_PRESSED,
} from "../actions/types";

import { CurrentQueue } from "../classes/CurrentQueue";

const initialState = {
  userName: "",
  deck: [],

  boxLevel1: [],
  boxLevel2: [],
  boxLevel3: [],
  boxLevel4: [],
  boxLevel5: [],
  boxLevel6: [],
  boxLevel7: [],

  boxRetired: [],

  currentDay: -1,
  currentMonth: -1,
  leitnerDay: 3, // timeline cursor
  studyStarted: false,
  cardDisplay: {
    title: "Pick and Roll",
    level: 10,
    examples: ["Go walk run and score", "win the game"],
    meaning:
      "a basketball play in which a player sets a screen and then cuts toward the basket for a pass",
    formality: 5,
  },
  //cardDisplay: this.currentStudying[0],
  cardsToAddQuantity: 2,
  studyButtonDisabledStatus: false,
  currentStudying: new CurrentQueue(),
  quantityOfCardsToAdd: 2,
};

function checkBoxesAndAddItemsIntoCurrent(leitnerDay) {
  const days = {
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

  let current = [];

  const allBoxes = [
    initialState.boxLevel1,
    initialState.boxLevel2,
    initialState.boxLevel3,
    initialState.boxLevel4,
    initialState.boxLevel5,
    initialState.boxLevel6,
    initialState.boxLevel7,
  ];

  function checkBox(b) {
    if (b < 1) {
      return;
    }
    current = [...current, ...allBoxes[b - 1]];
    checkBox(b - 1);
  }

  // for (const day in days) {

  checkBox(days[leitnerDay]);

  console.log("leitner day from inside function : ", leitnerDay);

  return current;
}

// const addCardsIntoCurrentStudyingArray = () => {
//   initialState.currentStudying = [...initialState.boxLevel1]
// }

export default function myState(state = initialState, action) {
  switch (action.type) {
    case INITIAL_CARD_LOAD:
      return {
        ...state,
        deck: action.payload,
      };
    case LOAD_STATE:
      // I just added the deck from storage for now, I'll add the rest later

      return {
        ...state,
        userName: action.payload["userName"],
        deck: action.payload["deck"],
        currentDay: action.payload["currentDay"],
        currentMonth: action.payload["currentMonth"],
        leitnerDay: action.payload["leitnerDay"],
        studyStarted: action.payload["studyStarted"],
      };

    case ADD_CARD:
      //console.log(action.payload)

      // if card is already in deck, option 1 - try editing card, card is already in the deck, return previous state
      // else
      return {
        ...state,
        deck: [...state.deck, action.payload],
      };

    case STUDY_BTN_PRESSED:
      // timeline
      // -> if first time
      // -> start study
      // -> timeline cursor -> set as day 1 or next day
      const day = state.studyStarted ? state.leitnerDay + 1 : state.leitnerDay;
      // cards from deck
      // -> get number of cards from current deck and add 'em to current studying array
      // -> change the level of the card from 0 to level 1 before inserting in current deck array
      for (let i = 0; i < state.quantityOfCardsToAdd; i++) {
        let card = state.deck.shift();
        if (card) {
          card.level = 1;
          state.boxLevel1.push(card);
        }
      }

      //addCardsIntoCurrentStudyingArray()
      //state.currentStudying = state.boxLevel1
      // for (let j = 0; j < state.boxLevel1.length; j++) {
      //   state.currentStudying.add(state.boxLevel1[j]);
      // }

      state.currentStudying.addArr(checkBoxesAndAddItemsIntoCurrent(day));

      // button status
      // -> disable button until all cards are studied
      // -> disable button until next day / different day than current
      console.log(day, " === === === from redducer");
      return {
        ...state,
        studyButtonDisabledStatus: true,
        leitnerDay: day,
        studyStarted: true,
      };

    case CARD_BTN_PRESSED:
      let card = state.currentStudying.dequeue();

      //get the cards out of box 1
      let fromLevel1 = card.level === 1 ? state.boxLevel1.shift() : null;
      let fromLevel2 = card.level === 2 ? state.boxLevel2.shift() : null;
      let fromLevel3 = card.level === 3 ? state.boxLevel3.shift() : null;
      let fromLevel4 = card.level === 4 ? state.boxLevel4.shift() : null;
      let fromLevel5 = card.level === 5 ? state.boxLevel5.shift() : null;
      let fromLevel6 = card.level === 6 ? state.boxLevel6.shift() : null;
      let fromLevel7 = card.level === 7 ? state.boxLevel7.shift() : null;

      // if good btn is pressed
      // -> change level of card to +1
      // -> save card in DB
      // -> delete card from 'queue'
      if (action.payload === "good") {
        card.level = card.level + 1;

        switch (card.level) {
          case 2:
            state.boxLevel2.push(card);
            break;
          case 3:
            state.boxLevel3.push(card);
            break;
          case 4:
            state.boxLevel4.push(card);
            break;
          case 5:
            state.boxLevel5.push(card);
            break;
          case 6:
            state.boxLevel6.push(card);
            break;
          case 7:
            state.boxLevel7.push(card);
            break;
          case 8:
            state.boxRetired.push(card);
            break;

          default:
            console.log("called default state  - check whats wrong");
            state.boxLevel1.push(card);
            break;
        }
      } else {
        // if again btn is pressed
        // -> change level of card to 1
        // -> send card to end of queue in current studying
        card.level = 1;
        state.boxLevel1.push(card);
        state.currentStudying.add(card);
      }

      //console.log("is current empty?")

      return {
        ...state,
        studyButtonDisabledStatus:
          state.currentStudying.length === 0 ? true : false,
      };

    case IS_LIST_EMPTY:
      return { ...state, studyButtonDisabledStatus: !action.payload };

    default:
      return state;
  }
}
