import { LOAD_STATE, ADD_CARD } from "../actions/types";

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
};

export default function (state = initialState, action) {
  switch (action.type) {
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
