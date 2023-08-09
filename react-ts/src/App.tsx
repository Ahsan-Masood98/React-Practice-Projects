import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    //This uses the spread operator ([...prevState]) to create a new array
    setTodos((prevState) => [...prevState, newTodo]);
    //This uses the concat method to create a new array by combining the elements of the previous state array and the newTodo object
    // setTodos((prevState) => {
    //   return prevState.concat(newTodo);
    // });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
