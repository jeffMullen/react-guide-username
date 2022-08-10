import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);

  const nameHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValidAge(false);
    } else {
      setIsValidAge(true);
    }
    setAge(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    if (!isValidName || !isValidAge) {
      return;
    }

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

    setIsValidName(false);
    setIsValidAge(false);
  };

  return (
    <Card>
      <form onSubmit={sumbitHandler}>
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
