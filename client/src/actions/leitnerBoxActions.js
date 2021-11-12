import { ACTION1 } from "./types";

export const changeLeitnerDay = () => (dispatch) => {
  dispatch({ type: ACTION1, payload: 5 });
};
