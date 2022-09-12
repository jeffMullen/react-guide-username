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
    const tempName = event.target.value.trim();

    if (tempName.length === 0) {
    } else {
      setIsValidName(true);
    }
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    const tempAge = event.target.value.trim();
    const numberAge = parseInt(age);

    if (tempAge.length === 0 || isNaN(numberAge)) {
    } else {
      setIsValidAge(true);
    }
    setAge(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    if (!isValidName || !isValidAge) {
      setModalText("Please enter a valid name and age (non-empty values)");
      setModal(true);
      return;
    }

    if (age[0] === "-") {
      setModalText("Please enter a valid age (>0)");
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
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={nameHandler}
                value={name}
              ></input>
            </div>
            <div className={styles["sub-form"]}>
              <label htmlFor="age">Age (Years)</label>
              <input
                type="number"
                id="age"
                onChange={ageHandler}
                value={age}
              ></input>
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
