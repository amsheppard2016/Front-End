import React from "react";

const Client = props => {
    return (
        <div className="teamMember-list">
            {props.client.map(member => (
                <div className="member" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Username: {member.username}</p>
                    <p>Password: {member.password}</p>
                    <p>Password Confirmation: {member.passwordConfirmation}</p>
                    <p>Email: {member.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Client;
