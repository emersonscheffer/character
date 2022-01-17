import {} from "../actions/types";

const initialState = {
  decks: [],
};

export default function myState(state = initialState, action) {
  switch (action.type) {
    case "LOAD_DECKS":
      console.log(action.payload);
      return {
        ...state,
        decks: action.payload,
      };

    default:
      return state;
  }
}
