import React, { useState } from "react";
import Client from "./Component/Client/Client";
import ClientSignUp from "./Component/Client/ClientSignUp";
import ClientSearch from "./Component/Client/ClientSearch";
import "./App.css";

function App() {
    const [client, setClient] = useState([]);
    const addNewMember = member => {
        const newClient = {
            id: Date.now(),
            name: member.name,
            username: member.username,
            password: member.password,
            passwordConfirmation: member.passwordConfirmation,
            email: member.email
        };
        setClient([...client, newClient]);
    };

    return (
        <div className="App">
            <h1>Client Sign Up</h1>
            <ClientSignUp addNewMember={addNewMember} />
            <Client client={client} />
            <ClientSearch />
        </div>
    );
}
export default App;
