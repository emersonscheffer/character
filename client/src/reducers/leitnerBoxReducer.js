import { ACTION1 } from "../actions/types";

const initialState = {
  decks: [],
  currentDay: -1,
  currentMonth: -1,
  leitnerDay: 1,
  studyStarted: false
};

export default function (state = initialState, action) {
  return state;
}
