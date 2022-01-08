import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, userLogin } from "../actions/usersActions";

const Login = () => {
  const dispatch = useDispatch();
  const [loginScreen, setLoginScreen] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        backgroundColor: "rgb(200, 200, 200)",
        height: "220px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <input
        type="text"
        placeholder="User Name"
        name="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="****"
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div
        style={{ backgroundColor: "yellow", width: "60px", height: "40px" }}
        onClick={() =>
          username !== ""
            ? password !== ""
              ? loginScreen
                ? dispatch(userLogin({ username, password }))
                : dispatch(addUser({ username, password }))
              : null
            : null
        }
      >
        {loginScreen ? "Login" : "Create"}
      </div>

      {loginScreen ? (
        <div>
          {/*  login div */}

          <h1>
            Don't have an account?{" "}
            <span onClick={() => setLoginScreen(false)}>Click here</span>
          </h1>
        </div>
      ) : (
        <div>
          Create account
          <h1>
            <span onClick={() => setLoginScreen(true)}>Cancel</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Login;
