import { combineReducers } from "redux";

import leitnerBoxReducer from "./leitnerBoxReducer";

export default combineReducers({
  leitnerBox: leitnerBoxReducer,
});
