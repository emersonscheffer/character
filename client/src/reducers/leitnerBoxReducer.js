import { LOAD_STATE, ADD_CARD, INITIAL_CARD_LOAD } from "../actions/types";

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
  leitnerDay: 1,
  studyStarted: false,
  cardDisplay: {
    title: "Pick and Roll",
    level: 10,
    examples: ["Go walk run and score", "win the game"],
    meaning: "a basketball play in which a player sets a screen and then cuts toward the basket for a pass",
    formality: 5,
  },
};

export default function (state = initialState, action) {
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

    default:
      return state;
  }
}
