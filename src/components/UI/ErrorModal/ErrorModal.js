import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      {props.modal ? (
        <div className={styles.modalWrapper}>
          <Card className={styles.modal}>
            <h2 className={styles.header}>Invalid Input</h2>
            <p className={styles.paragraph}>{props.modalText}</p>
            <div className={styles.buttonDiv}>
              <Button
                type="button"
                click={() => props.setModal(false)}
                className={styles.button}
              >
                Okay
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorModal;
