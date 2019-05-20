import {object, string, array} from "yup";

export const
    TEXT_INPUT = 'text',
    PASSWORD_INPUT = 'password',
    EMAIL_INPUT = 'email';

function getFieldSchema() {
    return object().shape({
        label: string().required(),
        name: string().required(),
        input: string().matches(/(text|password|email|number)/).required(),
        styles: object().shape({
            labelStyled: object(),
            inputStyled: object(),
        }),
    });
}

function getFormSchema() {
    return array().of(getFieldSchema()).min(1);
}

/**
 * Builders
 */
function FieldBuilder(name, input = TEXT_INPUT, label = '') {
    this.buildState = {name, label, input};
}

FieldBuilder.prototype.setInput = function(input) {
    this.buildState.input = input;
    return this;
};

FieldBuilder.prototype.setLabel = function (label) {
    this.buildState.label = label;
    return this;
};

FieldBuilder.prototype.setName = function (name) {
    this.buildState.name = name;
    return this;
};

FieldBuilder.prototype.getField = function () {
    return this.buildState;
};



export {
    getFormSchema,
    FieldBuilder,
}
