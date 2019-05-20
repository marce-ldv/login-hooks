import React from "react";
import {formType} from "../../types/forms/register";
import {useField, useZForm, Field} from "../ZForms/";

export default function RegisterForm() {

    function onSumbit(values) {
        console.log(values);
    }

    const {handleSubmit, fields, Form} = useZForm(formType, onSumbit);

    const userName = useField(fields, 'user_name');
    const password = useField(fields, 'password');
    const rePassword = useField(fields, 're_password');
    const email = useField(fields, 'email');

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Field {...userName} />
                <Field {...password} />
                <Field {...rePassword} />
                <Field {...email} />
                <input type="submit" />
            </Form>
        </>
    );
}
