import React, {Fragment} from "react";
import {formType} from "../../types/forms/register";
import {ZForm} from "../ZForms";

export default function RegisterForm(props) {

    return (
        <Fragment>
            <ZForm formType={formType} />
        </Fragment>
    );
}
