import {FieldBuilder, TEXT_INPUT, EMAIL_INPUT, PASSWORD_INPUT} from "../../components/ZForms/types";

/**
 * FORM TYPE WITH Z-FORM
 * @type {*[]}
 */
export const formType = [
    new FieldBuilder('user_name')
        .setLabel('Nombre de usuario')
        .getField(),

    new FieldBuilder('password', PASSWORD_INPUT)
        .setLabel('Contraseña')
        .getField(),

    new FieldBuilder('re_password', PASSWORD_INPUT)
        .setLabel('Vuelva a escribir la contraseña')
        .getField(),

    new FieldBuilder('email', EMAIL_INPUT)
        .setLabel('Ingrese el email')
        .getField(),
];
