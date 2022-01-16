import { GET_USER, USER_LOGIN } from "../actions/types";

const initialState = {
  users: [],
  user: {},
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
        // console.log(action.payload)
        return {
          ...state,
          user: action.payload,
          login_succeded: true
        }

    default:
      return state
  }
}
