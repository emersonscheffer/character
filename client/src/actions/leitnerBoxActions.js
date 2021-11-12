import { ADD_CARD } from "./types";

export const addCardToDeckAction = (card) => (dispatch) => {
  dispatch({ type: ADD_CARD, payload: card });
};
