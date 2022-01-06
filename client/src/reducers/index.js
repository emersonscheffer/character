import { combineReducers } from "redux";

import leitnerBoxReducer from "./leitnerBoxReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  leitnerBox: leitnerBoxReducer,
  usersReducer: usersReducer,
});
