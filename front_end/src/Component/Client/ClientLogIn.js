import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";
import { ClientSection, ClientForm, Button, FieldInput } from "./Styles";

const ClientLoginForm = ({ values, errors, touched, status }) => {
    const [login, setLogin] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setLogin(login => [...login, status]);
    }, [status]);
    return (
        <ClientSection>
            <ClientForm>
                <label htmlFor="client-username">Username: </label>
                <FieldInput id="username" type="text" name="username" />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}
                <br />
                <label htmlFor="client-password">Password: </label>
                <FieldInput id="password" type="password" name="password" />
                {errors.password && touched.password && (
                    <div>{errors.password}</div>
                )}
                <br />
                <Button type="submit">Log In</Button>
                <br />
                <h2>Don't have an account?</h2>
                <NavLink to="/clientsignup">
                    <Button>Sign Up For Anytime Fitness</Button>
                </NavLink>
            </ClientForm>
            {login.map(user => console.log("client login", user))}
        </ClientSection>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter username"),
        password: Yup.string().required("Please enter password")
    }),
    handleSubmit(values, { resetForm, setStatus }) {
        console.log("submitting login", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(ClientLoginForm);
export default FormikLoginForm;
