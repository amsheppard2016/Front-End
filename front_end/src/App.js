import React from "react";
import { Route } from "react-router-dom";
import ClientHeader from "./Component/Client/ClientHeader";
import ClientSignUp from "./Component/Client/ClientSignUp";
import ClassSearch from "./Component/Client/ClassSearch";
import InstructorClient from "./Component/InstructorClientPage";
import ClientLogin from "./Component/Client/ClientLogIn";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Route path="/" component={ClientHeader} />
            <Route
                path="/instructorclient"
                exact
                component={InstructorClient}
            />
            <Route path="/clientlogin" exact component={ClientLogin} />
            <Route path="/clientsignup" exact component={ClientSignUp} />
            <Route path="/classSearch" exact component={ClassSearch} />
        </div>
    );
}
export default App;
