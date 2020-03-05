import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../fitlogo.png";

import { HeaderStyle, LogoDiv, Button } from "./Styles";

export default function Header() {
    return (
        <HeaderStyle>
            <NavLink to="/instructorclient">
                <Button>Sign Up / Log In</Button>
            </NavLink>
            <NavLink to="/">
                <LogoDiv>
                    <img className="main-img" src={logo} alt="logo" />
                </LogoDiv>
            </NavLink>
            <NavLink to="/classsearch">
                <Button>Search Classes</Button>
            </NavLink>
        </HeaderStyle>
    );
}
