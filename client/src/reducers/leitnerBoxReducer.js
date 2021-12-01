import {
  LOAD_STATE,
  ADD_CARD,
  INITIAL_CARD_LOAD,
  IS_LIST_EMPTY,
  STUDY_BTN_PRESSED,
  CARD_BTN_PRESSED,
} from "../actions/types";

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

  currentDay: -1,
  currentMonth: -1,
  leitnerDay: 1, // timeline cursor
  studyStarted: false,
  // cardDisplay: {
  //   title: "Pick and Roll",
  //   level: 10,
  //   examples: ["Go walk run and score", "win the game"],
  //   meaning:
  //     "a basketball play in which a player sets a screen and then cuts toward the basket for a pass",
  //   formality: 5,
  // },
  //cardDisplay: this.currentStudying[0],
  cardsToAddQuantity: 2,
  studyButtonDisabledStatus: false,
  currentStudying: [],
  quantityOfCardsToAdd: 2,
};

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

      // cards from deck
      // -> get number of cards from current deck and add 'em to current studying array
      // -> change the level of the card from 0 to level 1 before inserting in current deck array
      for (let i = 0; i < state.quantityOfCardsToAdd; i++) {
        let card = state.deck.shift();
        card.level = 1;
        state.currentStudying.push(card);
      }

      // button status
      // -> disable button until all cards are studied
      // -> disable button until next day / different day than current

      return {
        ...state,
        studyButtonDisabledStatus: true,
        studyStarted: true,
      };

      case CARD_BTN_PRESSED: 
      // if good btn is pressed
        // -> change level of card to +1
        // -> delete card from 'queue'
      // if again btn is pressed
        // -> change level of card to 1
        // -> send card to end of queue in current studying
      return {
        ...state
      }

    case IS_LIST_EMPTY:
      return { ...state, studyButtonDisabledStatus: !action.payload };

    default:
      return state;
  }
}
