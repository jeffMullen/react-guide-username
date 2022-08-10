import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./UserForm.module.css";
import UserList from "../UserList/UserList";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    props.setUsers([
      ...props.users,
      {
        id: Math.random().toString(),
        name: name,
        age: age,
      },
    ]);

    setName("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className={styles["form-controls"]}>
          <div className={styles["sub-form"]}>
            <label>Username</label>
            <input type="text" onChange={nameHandler} value={name}></input>
          </div>
          <div className={styles["sub-form"]}>
            <label>Age (Years)</label>
            <input type="text" onChange={ageHandler} value={age}></input>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
