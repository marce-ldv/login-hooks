import React, { Fragment, useState } from "react";
import { newModel as registerData } from "../types/forms/register";

export default function RegisterForm(props) {
  const { _user_name, _password, _re_password, _email } = registerData();
  const [userName, setUserName] = useState(_user_name);
  const [password, setPassword] = useState(_password);
  const [rePassword, setRePassword] = useState(_re_password);
  const [email, setEmail] = useState(_email);

  return (
    <Fragment>
      <form onSubmit={e => ({})}>
        <label htmlFor="user_name"> Nombre de usuario</label>
        <input
          id="user_name"
          name="user_name"
          onChange={({ target }) => setUserName(target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={({ target }) => setPassword(target.value)}
        />
        <label htmlFor="password"> Contraseña</label>
        <input
          id="password"
          name="password"
          onChange={({ target }) => setRePassword(target.value)}
        />
        <label htmlFor="re_password">Repita Contraseña</label>
        <input
          id="re_password"
          name="re_password"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input type="submit" value="Registrarse" />
      </form>
    </Fragment>
  );
}
