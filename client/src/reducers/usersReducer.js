const initialState = {
  users: [],
};

export default function myState(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      console.log(action.payload);
      return {
        ...state,
      };

    default:
      return state
  }
}
