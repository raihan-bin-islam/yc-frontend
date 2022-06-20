import React from "react";
import { errorMsgContainer } from "./formErrorMessage.module.scss";

const FormErrorMessage = ({ msg }) => {
  return (
    <div className={errorMsgContainer}>
      <h2>{msg}</h2>
    </div>
  );
};

export default FormErrorMessage;
