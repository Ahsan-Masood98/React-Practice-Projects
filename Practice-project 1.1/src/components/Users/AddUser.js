import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEneteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age > 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEneteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
          <label htmlFor="age">Age (Yaers)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={(e) => setEneteredAge(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
