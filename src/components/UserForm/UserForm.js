import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const nameHandler = (event) => {
    const name = event.target.value.trim();

    if (name.length === 0) {
    } else {
      setIsValidName(true);
    }
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    const age = event.target.value.trim();
    const numberAge = parseInt(age);

    if (age.length === 0 || isNaN(numberAge) || age[0] === "-") {
    } else {
      setIsValidAge(true);
    }
    setAge(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    if (!isValidName || !isValidAge) {
      setModal(true);
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
    <>
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

      <ErrorModal modal={modal} setModal={setModal} modalText={modalText} />
    </>
  );
};

export default UserForm;
