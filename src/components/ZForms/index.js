import React, {useEffect} from 'react';
import {useZForm} from "./hooks";
import {ZInput} from './input'

export const ZForm = ({formType}) => {

    const {handleSubmit, isValid, onChange} = useZForm(formType, (inputs) => {
        console.log(inputs);
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                {isValid && formType.map(field => (<ZInput field={field} onChange={onChange} key={field.name} />))}
                <input type="submit" />
            </form>
        </>
    )
};