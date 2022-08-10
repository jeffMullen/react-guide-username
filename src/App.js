import React, { useState } from "react";

//Components
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UserForm users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
