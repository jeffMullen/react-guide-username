import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      {props.modal ? (
        <Card>
          <p>{props.modalText}</p>
          <Button type="button">Okay</Button>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorModal;
