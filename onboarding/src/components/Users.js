import React from "react";

import UserCard from "./UserCard"; 

const Users = (props) => {
    console.log("Users.js: props: "); 
    console.log(props); 
    return (
        <div className ="Users">
            {
                props.users.map(user => (
                    <UserCard data={user}  />
                ))
            }
        </div>
    );
  };

export default Users; 