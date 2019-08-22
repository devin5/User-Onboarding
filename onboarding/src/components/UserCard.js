import React from "react";

const UserCard = (props) => {
    console.log("UserCard.js: props: "); 
    console.log(props); 
    return (
        <div className ="playerCard">
            <h2>Name: {props.data.name}</h2>
            <p>Email: {props.data.email}</p>
            <p>Password: {props.data.password} </p>
            <p>Terms of Service: { props.data.termsOfService ? "Yes" : "No" } </p>
            {/* <p>Terms of Service: {props.data.termsOfService} </p> */}
        </div>
    );
  };

export default UserCard; 