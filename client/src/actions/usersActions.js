import axios from "axios";
import { ADD_USER, GET_USER } from "../actions/types";

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

export const userLogin = (username, password) => (dispatch) => {
  axios.post("/api/users/login", { username, password })
  
};
