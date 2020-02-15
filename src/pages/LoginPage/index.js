import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../actions/authActions";


import "./LoginPage.scss";

const LoginPage = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onLoginHandler = () => {
    if (!username || !password) {
      setError("Invalid username or password");
      return;
    }
    dispatch(setUser(username));
    history.push("/");
  };

  const onUsernameChange = e => {
    const { value } = e.currentTarget;
    setUsername(value);
  };

  const onPasswordChange = e => {
    const { value } = e.currentTarget;
    setPassword(value);
  };

  return (
    <div className="login-page">
      {/* <div className="login-header">Member Login</div> */}
      <h1>Member Login</h1>
      <form className="login-form">
        <div className="username">
          <input
            placeholder="Username"
            className="login-input"
            onChange={onUsernameChange}
          ></input>
        </div>
        <div className="password">
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            onChange={onPasswordChange}
          ></input>
        </div>
        <div>
          <button type="submit" className="login-button"onClick={onLoginHandler}>
            LOGIN
          </button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default LoginPage;
