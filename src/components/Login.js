import React, { Fragment, useState } from "react";
import { newModel as loginData } from "../types/forms/login";
import "./login.css";

export default function Login() {
  const { _username, _password } = loginData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSetUsername() {}

  return (
    <div className="Login">
      <h2>Login</h2>
      <Fragment>
        <form className="login-form">
          <label>username: </label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username or email"
            className="username-input"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <label>password: </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="password-input"
            onChange={({ target }) => setPassword(target.value)}
          />
          <input type="submit" value="Login" onClick={handleSetUsername} />
        </form>
      </Fragment>
    </div>
  );
}
