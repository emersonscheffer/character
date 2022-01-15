import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecks } from "../actions/decksActions";
import { getUser } from "../actions/usersActions";
import AppHome from "./AppHome";
import Login from "./Login";

const Home = () => {
  const dispatch = useDispatch();
  const { login_succeded } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getDecks())
  }, [dispatch]);

  return (
    <div style={{ height: "100vh", backgroundColor: "gray", width: "100vw" }}>
      {login_succeded ? <AppHome /> : <Login />}
    </div>
  );
};

export default Home;
