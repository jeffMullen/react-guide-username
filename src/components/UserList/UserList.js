import React from "react";

import Card from "../UI/Card/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <>
      {props.users.length > 0 && (
        <Card className={styles.container}>
          {props.users.map((user) => (
            <p key={user.id} className={styles.entry}>
              {user.name} ({user.age} Years Old)
            </p>
          ))}
        </Card>
      )}
    </>
  );
};

export default UserList;
