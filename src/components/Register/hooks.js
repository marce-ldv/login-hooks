import {useState, useEffect} from 'react';

export const useRegisterUser = (callback, modelForm) => {

    /**
     * Set the state for the inputs
     */
    const [input, setInputs] = useState({});

    /**
     * setting up the handlesubmit
     * @param eventSubmit
     */
    const handleSubmit = (eventSubmit) => {
        eventSubmit.preventDefault();
        const model = modelForm(input);
        callback(eventSubmit, model);
    };

    /**
     * Setting up the onChange handler
     * @param e
     */
    const onChange = (e) => {
        e.persist();
        const {target} = e;
        setInputs((inputs) => ({...inputs, [target.name]: target.value}));
    };

    return {
        handleSubmit,
        onChange,
        input
    }
};
