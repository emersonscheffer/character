import { GET_USER, USER_LOGIN, UPDATE_USER_INFO, ADD_USER } from "../actions/types";

const initialState = {
  user: {},
  login_succeded: false,
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
        login_succeded: true,
      };
    case UPDATE_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };

      case ADD_USER : 
        return {
          ...state,
          user: action.payload,
          login_succeded:true
        }

    default:
      return state;
  }
}
