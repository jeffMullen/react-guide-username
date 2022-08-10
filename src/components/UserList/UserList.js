import React from "react";

import Card from "../UI/Card/Card";

const UserList = (props) => {
  return (
    <>
      {props.users.map((user) => (
        <Card key={user.id}>
          <p>
            {user.name} ({user.age} Years Old)
          </p>
        </Card>
      ))}
    </>
  );
};

export default UserList;
