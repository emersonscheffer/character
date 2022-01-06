import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/usersActions";
import Login from "./Login";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <div style={{ height: "700px", backgroundColor: "gray" }}>
      <Login />
    </div>
  );
};

export default Home;
