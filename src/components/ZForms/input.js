import React from 'react';

export const ZInput = ({field, onChange}) => {
    return (
        <div>
            <label
                htmlFor={"z-"+field.name}
            >
                {field.label}
            </label>
            <input
                type={field.input}
                id={"z-"+field.name}
                name={field.name}
                onChange={onChange}
            />
        </div>
    )
};
