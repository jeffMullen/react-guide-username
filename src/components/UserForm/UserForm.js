import React from "react";

import Card from "../UI/Card";

import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card>
      <form>
        <div className={styles["form-controls"]}>
          <div className={styles["sub-form"]}>
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className={styles["sub-form"]}>
            <label>Age (Years)</label>
            <input type="text"></input>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
