import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandelr = (event: React.FormEvent) => {
    event.preventDefault();

    // this ? in todoInputRef.current? tells typescript that it can be null
    // or you dont know that cnnection is established or will be establisd
    // in the future so it gives type of string or undefiened back and
    // if dont get the value store null
    // const enteredText = todoInputRef.current?.value;

    // this ! in todoInputRef.current! tells type script that we are sure
    // that the connection is established and the value will never be null
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
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
