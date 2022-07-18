import React from "react";
import ButtonLight from "../../Shared/Button/Button";

import { messageContainer, messageDiv, message, buttonContainer } from "./SuccessMessage.module.scss";
import SuccessSvg from "./svg/SuccessSvg";

import { useRouter } from "next/router";

const SuccessMessage = () => {
  const router = useRouter();

  return (
    <div className={messageContainer}>
      <div className={messageDiv}>
        <div className={message}>
          <SuccessSvg />
          <h2>Your Application Has Been Submitted Successfully</h2>
        </div>
        <div className={buttonContainer} onClick={() => router.push("/")}>
          <ButtonLight text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
