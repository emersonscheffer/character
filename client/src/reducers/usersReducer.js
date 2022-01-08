import { GET_USER, USER_LOGIN } from "../actions/types";

const initialState = {
  users: [],
  
  login_succeded: false
};

export default function myState(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      console.log(action.payload);
      return {
        ...state,
      };
      case USER_LOGIN:
        return {
          ...state,
          login_succeded: true
        }

    default:
      return state
  }
}
