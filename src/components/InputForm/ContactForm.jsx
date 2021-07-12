import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import SubmitForm from "./SubmitForm";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredMail, setEnteredMail] = useState("");
  const [mailIsValid, setMailIsValid] = useState();
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length >= 3);
  };

  const emailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const validateMailHandler = () => {
    setMailIsValid(enteredMail.includes("@"));
  };

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const messsageChangeHandler = (event) => {
    setEnteredMsg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredMail.trim().length > 0 &&
      enteredMail.trim().length > 0 &&
      enteredSubject.trim().length > 0 &&
      enteredMsg.trim().length > 0
    ) {
      console.log({ enteredName, enteredMail, enteredSubject, enteredMsg });
      setEnteredName("");
      setEnteredMail("");
      setEnteredSubject("");
      setEnteredMsg("");
      setFormIsValid(true);
    }
  };
  return (
    <React.Fragment>
      {!formIsValid && (
        <Card>
          <div className={classes.heading}>
            <h1>Contact Us</h1>
          </div>

          <form onSubmit={submitHandler}>
            <div className={classes.form_controls}>
              <div
                className={`${classes.form_control} ${
                  nameIsValid === false ? classes.invalid : ""
                }`}
              >
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  onBlur={validateNameHandler}
                />
              </div>

              <div
                className={`${classes.form_control} ${
                  mailIsValid === false ? classes.invalid : ""
                }`}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={emailChangeHandler}
                  value={enteredMail}
                  onBlur={validateMailHandler}
                />
              </div>

              <div className={classes.form_control}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="subject"
                  onChange={subjectChangeHandler}
                  value={enteredSubject}
                />
              </div>

              <div className={classes.form_control}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  onChange={messsageChangeHandler}
                  value={enteredMsg}
                />
              </div>
              <div className={classes.actions}>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Card>
      )}
      {formIsValid && <SubmitForm />}
    </React.Fragment>
  );
};

export default ContactForm;
