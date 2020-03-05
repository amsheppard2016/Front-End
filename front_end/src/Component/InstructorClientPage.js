import React from "react";
import { NavLink } from "react-router-dom";

import { InstructorClientChoice, ChoiceButton } from "./Client/Styles";

export default function InstructorClient() {
    return (
        <InstructorClientChoice>
            <NavLink to="/instructorlogin">
                <ChoiceButton>Instructor</ChoiceButton>
            </NavLink>
            <NavLink to="/clientlogin">
                <ChoiceButton>Client</ChoiceButton>
            </NavLink>
        </InstructorClientChoice>
    );
}
