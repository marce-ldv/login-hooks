import {useState} from 'react';
import {getFormSchema as ZFormSchema} from "./types";
import {Form} from "./form";

const useZForm = (formType, callback) => {

    /**
     *
     */
    const [inputs, setInputs] = useState({});

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

    const isValid = ZFormSchema().isValidSync(formType);
    if (! isValid) throw new Error("BAD FORM TYPE");

    let fields = {};
    formType.forEach(o => {
        fields[o.name] = {};
        fields[o.name].field = o;
        fields[o.name].onChange = onChange;
    });

    return {
        Form,
        handleSubmit,
        onChange,
        fields,
    }
};

const useField = (fields, name, inputStyled = false, labelStyled = false) => {
    if (typeof fields[name] === 'undefined') throw new Error(`The field with the name ${name} don't exists`);
    const {[name]: field} = fields;
    return {...field, inputStyled, labelStyled};
};

export {
    useZForm,
    useField,
}
