import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/usersActions";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "rgb(200, 200, 200)",
        height: "220px",
        width: "400px",
        borderRadius: "10px",

        //marginTop: "100px"
      }}
    >
      <input type="text" />
      <input type="password" />

      <div
        style={{ backgroundColor: "yellow", width: "60px", height: "40px" }}
        onClick={() =>
          dispatch(addUser({ firstname: "Emerson", lastname: "drake" }))
        }
      >
        Login
      </div>
    </div>
  );
};

export default Login;
