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

class Card {
  constructor(title, front, back) {
    this.title = title;
    this.front = front;
    this.back = back;
    this.level = 1
    this.examples = []
    this.formality = 5
  }
  
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      const newCard = new Card(
        action.payload.cardTitle,
        action.payload.cardFront,
        action.payload.cardBack
      );

      return {
        ...state,
        deck: [...state.deck, newCard],
      };

    default:
      return state;
  }
}
