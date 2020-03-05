import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";
import { ClientSection, ClientForm, Button, FieldInput } from "./Styles";

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <ClientSection>
            <ClientForm>
                <label htmlFor="user-name">Name:</label>
                <FieldInput id="name" type="text" name="name" />
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}

                <br />
                <label htmlFor="user-email">Email:</label>
                <FieldInput id="email" type="email" name="email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <br />
                <label htmlFor="user-username">Username:</label>
                <FieldInput id="username" type="text" name="username" />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}
                <br />
                <label htmlFor="user-password">Password: </label>
                <FieldInput id="password" type="password" name="password" />
                {errors.password && touched.password && (
                    <div>{errors.password}</div>
                )}
                <br />
                <label htmlFor="user-password-confirmation">
                    Password Confirmation:
                </label>
                <FieldInput
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
            </ClientForm>

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
        </ClientSection>
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
