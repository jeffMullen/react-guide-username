import React from "react";

import Card from "../UI/Card/Card";

const UserList = (props) => {
  return (
    <>
      <Card>
        {props.users.map((user) => (
          <p key={user.id}>
            {user.name} ({user.age} Years Old)
          </p>
        ))}
      </Card>
    </>
  );
};

export default UserList;
