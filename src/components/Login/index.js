import React, { Fragment, useState, useReducer } from "react";
import { newModel as loginData } from "../../types/forms/login";
import { useLoginHook } from './hooks';
import axios, { apiConfig } from '../../core/axiosInstance';
import "./login.css";

export default function LoginForm(props) {

  const [store, doLogin] = useLoginHook();
  const [username, setUsername] = useState('username',  '');
  const [password, setPassword] = useState('password', '');

  return (
    <div className="Login">
      <h2>Login</h2>
      <Fragment>
        <form className="login-form" onClick={() => doLogin(username, password)}>
          <label>username: </label>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="Enter your username or email"
            className="username-input"
            onChange={({target: {value}}) => setUsername(value)}
            // onChange={({ target }) => setUsername(target.value)}
          />
          <label>password: </label>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            className="password-input"
            onChange={({ target }) => setPassword(target.value)}
          />
          <input type="submit" value="Login"/>
        </form>
      </Fragment>
    </div>
  );
}
