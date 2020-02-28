import React, { useState } from "react";

const ClientForm = props => {
    const [client, setClient] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
        email: ""
    });
    const handleChanges = event => {
        setClient({
            ...client,
            [event.target.name]: event.target.value,
            [event.target.username]: event.target.value,
            [event.target.password]: event.target.value,
            [event.target.passwordConfirmation]: event.target.value,
            [event.target.email]: event.target.value
        });
        console.log(client);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(client);
        setClient({
            name: "",
            username: "",
            password: "",
            passowordConfirmation: "",
            email: ""
        });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="client-name">Name: </label>
            <input
                id="client-name"
                type="text"
                name="name"
                required
                placeholder="Enter name"
                onChange={handleChanges}
                value={client.name}
            />
            <br />
            <label htmlFor="client-username">Username: </label>
            <input
                id="client-username"
                type="text"
                name="username"
                required
                placeholder="Enter username"
                onChange={handleChanges}
                value={client.username}
            />
            <br />
            <label htmlFor="client-password">Password: </label>
            <input
                id="client-password"
                type="password"
                name="password"
                required
                placeholder="Enter password"
                onChange={handleChanges}
                value={client.password}
            />
            <br />
            <label htmlFor="client-password-confirmation">
                Password Confirmation:
            </label>
            <input
                id="client-password-confirmation"
                type="password"
                name="passwordConfirmation"
                required
                placeholder="Enter password confirmation"
                onChange={handleChanges}
                value={client.passwordConfirmation}
            />
            <br />
            <label htmlFor="client-email">Email: </label>
            <input
                id="client-email"
                type="email"
                name="email"
                required
                placeholder="Enter email"
                onChange={handleChanges}
                value={client.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ClientForm;
