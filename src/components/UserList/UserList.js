import React from "react";

import Card from "../UI/Card/Card";

const UserList = (props) => {
  console.log(props.users);
  return (
    <>
      {props.users.map((user) => (
        <Card key={Math.random()}>
          <p>
            {user.name} ({user.age} years old.)
          </p>
        </Card>
      ))}
    </>
  );
};

export default UserList;
