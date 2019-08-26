// import React, {useState} from 'react';
import React from "react"; 
import './App.css';

import Form from "./components/Form"; 
// import Users from "./components/Users";

function App() {

  //const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Form />
      {/* <Form setUsers={setUsers}/> */}
      {/* <Users users={users}/> */}
    </div>
  );
}

export default App;
