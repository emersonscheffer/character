import axios from "axios";
import { ADD_USER, GET_USER, USER_LOGIN } from "../actions/types";

//import {returnErrors} from './errorActions'

export const addUser = (user) => (dispatch) => {
  axios.post("/api/users", user).then((res) =>
    dispatch({
      type: ADD_USER,
      payload: res.data,
    })
  );
};

export const getUser = () => (dispatch) => {
  axios.get("api/users").then((res) =>
    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  );
  //.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const userLogin = (user) => (dispatch) => {
  axios.post("/api/users/login", user).then((res) => {
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
  });
};

// create an empty deck in the database
export const createDeckAction = (id, subject) => (dispatch) => {
  axios
    .put(`/api/users/createdeck/${id}`, subject)
    .then(dispatch({ type: "Create New Deck" }));
};

// add cards to box 1 and current studying
export const addCardsToStudy = (id, subject) => dispatch => {
  axios.put(`/api/users/addcardstodeck/${id}`, subject)
  .then()
}