import React from "react";
import { useState } from "react";

//Components
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UserForm />
      <UserList users={users} />
    </div>
  );
}

export default App;
