import React, {Fragment, useState} from "react";
import {newModel as registerData} from "../../types/forms/register";
import {useRegisterUser} from './hooks';
import axios from '../../core/axiosInstance';

export default function RegisterForm(props) {

    /**
     * Register hooks
     */
    const {handleSubmit, onChange} = useRegisterUser(async (e, userData) => {
            console.log("submited with data: ", userData);
            try {
                const response = await axios.post("/register", {userData});

                console.log(response);
            } catch (e) {
                console.log(e)
            }
        },
        registerData
    );

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user_name"> Nombre de usuario</label>
                <input
                    id="user_name"
                    name="user_name"
                    // onChange={({target}) => setUserName(target.value)}
                    onChange={onChange}

                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    // onChange={({target}) => setPassword(target.value)}
                    onChange={onChange}
                />
                <label htmlFor="password"> Contraseña</label>
                <input
                    id="password"
                    name="password"
                    // onChange={({target}) => setRePassword(target.value)}
                    onChange={onChange}
                />
                <label htmlFor="re_password">Repita Contraseña</label>
                <input
                    id="re_password"
                    name="re_password"
                    // onChange={({target}) => setEmail(target.value)}
                    onChange={onChange}
                />
                <input type="submit" value="Registrarse"/>
            </form>
        </Fragment>
    );
}
