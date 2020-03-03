import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Button = styled.button`
    box-shadow: 0px 1px 0px 0px #f0f7fa;
    background: linear-gradient(
        180deg,
        rgba(183, 156, 237, 1) 0%,
        rgba(116, 99, 185, 1) 60%
    );
    background-color: rgb(183, 156, 237);
    border-radius: 6px;
    border: 1px solid #7161ef;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #5b6178;

    &:hover {
        background: linear-gradient(
            180deg,
            rgba(116, 99, 185, 1) 0%,
            rgba(183, 156, 237, 1) 60%
        );
        background-color: rgb(183, 156, 237);
    }
`;

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <section className="form">
            <Form>
                <label htmlFor="user-name">Name:</label>
                <Field id="name" type="text" name="name" />
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}

                <br />
                <label htmlFor="user-email">Email:</label>
                <Field id="email" type="email" name="email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <br />
                <label htmlFor="user-username">Username:</label>
                <Field id="username" type="text" name="username" />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}
                <br />
                <label htmlFor="user-password">Password: </label>
                <Field id="password" type="password" name="password" />
                {errors.password && touched.password && (
                    <div>{errors.password}</div>
                )}
                <br />
                <label htmlFor="user-password-confirmation">
                    Password Confirmation:
                </label>
                <Field
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                />
                {errors.passwordConfirmation &&
                    touched.passwordConfirmation && (
                        <div>{errors.passwordConfirmation}</div>
                    )}
                <br />
                <Button type="submit">Add Member</Button>
            </Form>

            {users.map(
                user => console.log("usersignup", user)
                // (
                //     <ul key={user.id}>
                //         <li>Name: {user.name}</li>
                //         <li>Email: {user.email}</li>
                //         <li>Username:{user.username}</li>
                //         <li>Password: {user.password}</li>
                //         <li>
                //             Password Confirmation:{" "}
                //             {user.passwordConfirmation}
                //         </li>
                //     </ul>
                // )
            )}
        </section>
    );
};
const FormikUserForm = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            email: "",
            username: "",
            password: "",
            passwordConfirmation: ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required."),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required."),
        username: Yup.string()
            .min(6, "Must contain 6 characters")
            .required("Username is required."),

        password: Yup.string()
            .required("Please Enter your password")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
            ),
        passwordConfirmation: Yup.string()
            .required("This field is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
    }),
    handleSubmit(values, { resetForm, setStatus }) {
        console.log("submitting", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);
export default FormikUserForm;
