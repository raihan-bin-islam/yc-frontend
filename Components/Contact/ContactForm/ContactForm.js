import React, { useState } from "react";

// COMPONENTS
import Button from "../../Shared/Button/Button";

// CSS
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const { contactForm, inputContainer, btnContainer, textareaContainer } = styles;

  // STATE
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmission, setIsSubmission] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = new FormData();

    contactData.append("name", userName);
    contactData.append("email", email);
    contactData.append("message", message);

    const requestOption = {
      method: "POST",
      body: contactData,
    };
    const baseUrl = process.env.baseUrl;

    fetch(`${baseUrl}/contact-form`, requestOption)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Submitted!");
          setUserName("");
          setEmail("");
          setMessage("");
          e.target.reset();

          setIsDisabled(true);
          setIsSubmission(true);
        } else {
          alert("Something went wrong!");
          setUserName("");
          setEmail("");
          setMessage("");
          e.target.reset();

          setIsDisabled(true);
          setIsSubmission(true);
        }
      });
  };

  return (
    <form className={contactForm} onSubmit={handleSubmit}>
      <div className={inputContainer}>
        <input type="text" placeholder="Name" value={userName} required onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className={inputContainer}>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={textareaContainer}>
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className={btnContainer}>
        <Button text={isSubmission ? "Sending.." : "Send"} type="submit" disabled={isDisabled} />
      </div>
    </form>
  );
};

export default ContactForm;
