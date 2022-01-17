import { combineReducers } from "redux";

import leitnerBoxReducer from "./leitnerBoxReducer";
import usersReducer from "./usersReducer";
import decksReducer from "./decksReducer";

export default combineReducers({
  leitnerBox: leitnerBoxReducer,
  usersReducer: usersReducer,
  decksReducer: decksReducer,
});
