import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Css/SignInPage.css";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../Redux/Reducers/AuthSlice";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleSignIn = () => {
    dispatch(loginStart());

    setTimeout(() => {
      if (username === "user" && password === "password") {
        dispatch(loginSuccess({ username }));
      } else {
        dispatch(loginFailure("Invalid username or password"));
      }
    }, 1000);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>

        {isAuthenticated ? (
          <p>You are signed in as {username}</p>
        ) : (
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        )}

        {loading && <div className="loading-spinner">Loading...</div>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;
