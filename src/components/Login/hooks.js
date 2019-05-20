import {useState, useReducer} from 'react';
import axiosInstance from '../../core/axiosInstance';

export const useLoginHook = () => {
    const [state, dispatch] = useReducer();
    const doLogin = async (user, pass) => {
        const response = await axiosInstance.post('/login', { user, pass });
        //userName
        //token
        dispatch({type: 'login', response })
    }
    return [state, doLogin];
}
