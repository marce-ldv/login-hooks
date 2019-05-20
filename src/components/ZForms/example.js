import React from 'react';
import {useZForm, useField} from "./hooks";
import {ZField as Field} from './field'

export const ZForm = ({formType, callback}) => {

    const {handleSubmit, fields, Form} = useZForm(formType, callback);

    const userName = useField(fields, 'user_name');
    const password = useField(fields, 'password');

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/*{isValid && formType.map(field => (<ZInput field={field} onChange={onChange} key={field.name} />))}*/}
                <Field {...userName} />
                <Field {...password} />
                <input type="submit" />
            </Form>
        </>
    )
};