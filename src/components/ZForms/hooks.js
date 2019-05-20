import {useState} from 'react';
import {getFieldSchema, getFormSchema as ZFormSchema} from "./types";

const useZForm = (formType, callback) => {

    /**
     *
     */
    const [inputs, setInputs] = useState({});
    const [isValid, setIsValid] = useState(false);

    /**
     *
     * @returns {Promise<void>}
     */
    const validateSchema = async () => {
        const validate = await ZFormSchema().isValid(formType);
        setIsValid(validate);
    };

    /**
     *
     * @param eventSubmit
     * @returns {Promise<void>}
     */
    const handleSubmit = (eventSubmit) => {
        eventSubmit.preventDefault();
        callback(inputs, eventSubmit);
    };

    /**
     *
     * @param e
     */
    const onChange = (e) => {
        e.persist();
        const {target} = e;
        setInputs((inputs) => ({...inputs, [target.name]: target.value}));
    };

    validateSchema();

    return {
        handleSubmit,
        onChange,
        isValid,
    }
};

export {
    useZForm,
}
