import React from 'react';

const ZField = ({field, inputStyled, labelStyled, onChange}) => {
    return (
        <div>
            {labelStyled
                ? <labelStyled
                    htmlFor={"z-" + field.name}
                > {field.label}
                </labelStyled>
                : <label
                    htmlFor={"z-" + field.name}
                >
                    {field.label}
                </label>
            }
            {inputStyled
                ? <inputStyled
                    type={field.input}
                    id={"z-" + field.name}
                    name={field.name}
                    onChange={onChange}
                />
                : <input
                    type={field.input}
                    id={"z-" + field.name}
                    name={field.name}
                    onChange={onChange}
                />
            }
        </div>
    )
};

export {
    ZField,
};
