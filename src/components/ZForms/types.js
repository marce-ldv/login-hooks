import {object, string, array} from "yup";

function getFieldSchema() {
    return object().shape({
        label: string().required(),
        name: string().required(),
        input: string().matches(/(text|password|email|number)/),
    });
}

function getFormSchema() {
    return array().of(getFieldSchema()).min(1);
}

export {
    getFieldSchema,
    getFormSchema,
}
