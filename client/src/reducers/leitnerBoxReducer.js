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



class Card {
  constructor(title, formality, meaning, example1, example2, example3) {
    this.title = title;
    this.formality = formality
    this.meaning = meaning;
    this.example1 = example1;
    this.example2 = example2;
    this.example3 = example3;
    this.level = 1;
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      // const newCard = new Card(
      //   action.payload.cardTitle,
      //   action.payload.cardFormality,
      //   action.payload.cardMeaning,
      //   action.payload.cardExample1,
      //   action.payload.cardExample2,
      //   action.payload.cardExample3
      // );

      console.log(action.payload)
        
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
