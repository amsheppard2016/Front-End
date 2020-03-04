import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../fitlogo.png";

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

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

const LogoDiv = styled.div`
    height: auto;
    width: auto;
`;

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
