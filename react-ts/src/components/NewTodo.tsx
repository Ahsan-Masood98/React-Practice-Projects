import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandelr = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandelr} className={classes.form}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
