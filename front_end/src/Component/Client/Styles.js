import styled from "styled-components";
import { Form, Field } from "formik";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LogoDiv = styled.div`
    height: auto;
    width: auto;
`;

export const InstructorClientChoice = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 13%;
`;

export const ChoiceButton = styled.button`
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
    padding: 30px 30px;
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

export const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5%;
`;

export const SearchBars = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const SearchResults = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Card = styled.div`
    background: #dec0f1;
    width: 20%;
    border: solid 6px #957fef;
    margin: 1%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    & h2 {
        margin-top: 2%;
        margin-bottom: 2%;
    }
    & h3 {
        margin-top: 2%;
        margin-bottom: 1%;
    }
`;

export const Input = styled.input`
    box-sizing: border-box;
    font-size: 14px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    box-shadow: inset 0 0 0 3px #b79ced;
    width: 100%;
    outline: none;
    transition: all 200ms;
`;
export const Button = styled.button`
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

export const FieldInput = styled(Field)`
    box-sizing: border-box;
    font-size: 14px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    box-shadow: inset 0 0 0 3px #b79ced;
    width: 100%;
    outline: none;
    transition: all 200ms;
`;

export const ClientSection = styled.section`
    display: flex;
    justify-content: center;
`;

export const ClientForm = styled(Form)`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & label {
        font-weight: bold;
        font-size: 14pt;
    }
`;
