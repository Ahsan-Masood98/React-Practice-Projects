import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);
  // Name input validation
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // let formIsValid = false;

  // if (enteredNameIsValid) {
  //   formIsValid = true;
  // }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  //Email Input validation
  let enteredMailIsValid;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredMail)) {
    enteredMailIsValid = true;
  } else {
    enteredMailIsValid = false;
  }
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = () => {
    setEnteredMailTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredMailTouched(true);

    if (!enteredNameIsValid && !enteredMailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredMail);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredMail("");
    setEnteredMailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const mailInputClasses = mailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredMail}
        />
        {mailInputIsInvalid && (
          <p className="error-text">Email must be Valid and not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
