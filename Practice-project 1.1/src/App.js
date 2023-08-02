import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
const [userlist, setUserList]=useState([])
const addUserHandler = (uName, uAge)=>{
  setUserList((prevUserList) => {
    return [...prevUserList, {name:uName, age:uAge, id: Math.random.toString()}]
 } )
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userlist}/>
    </div>
  );
}

export default App;
