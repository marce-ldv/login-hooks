import React from "react";
import {formType} from "../../types/forms/register";
import {useField, useZForm} from "../ZForms/";
import {ZField as Field} from "../ZForms/field";

export default function RegisterForm(props) {

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
                {/*{isValid && formType.map(field => (<ZInput field={field} onChange={onChange} key={field.name} />))}*/}
                <Field {...userName} />
                <Field {...password} />
                <Field {...rePassword} />
                <Field {...email} />
                <input type="submit" />
            </Form>
        </>
    );
}
