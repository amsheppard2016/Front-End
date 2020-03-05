import React from "react";
import { NavLink } from "react-router-dom";

import { InstructorClientChoice, Button } from "./Client/Styles";

export default function InstructorClient() {
    return (
        <InstructorClientChoice>
            <NavLink to="/instructorlogin">
                <Button>Instructor</Button>
            </NavLink>
            <NavLink to="/clientlogin">
                <Button>Client</Button>
            </NavLink>
        </InstructorClientChoice>
    );
}
