import * as util from './util';

export const showAlert = ({ setAlert, status }) => {
    switch (status) {
        case util.SOMETHING_WRONG:
            setAlert({
                severity: "warning",
                message: "Something went wrong",
                show: true,
            })
            break;
        case util.LOGIN_SUCCESSFUL:
            setAlert({
                severity: "success",
                message: "Login Successful",
                show: true,
            })
            break;
        case util.MANDATORY_FIELDS_EMPTY:
            setAlert({
                severity: "warning",
                message: "email & password can't be empty",
                show: true,
            })
            break;
        default:
            setAlert({
                severity: "error",
                message: "",
                show: false,
            });
    }
    setTimeout(() => hideAlert({setAlert}), 2000);
}

export const hideAlert = ({ setAlert }) => {
    setAlert({
        severity: "error",
        message: "",
        show: false,
    });
}