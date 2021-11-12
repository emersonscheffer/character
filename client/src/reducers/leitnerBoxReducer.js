import { ADD_CARD } from "../actions/types";

const initialState = {
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

let dataSet = [
  {
    level: 1,
    title: "Demure",
    front: "Demure",
    back: "Shy, Reserved",
    examples: "-",
    formality: "-",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        deck: [...state.deck, action.payload],
      };

    default:
      return state;
  }
}
