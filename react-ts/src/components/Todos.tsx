import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// React.FC is a generic type defined by React & TypeScript
// thsis React.FC<{}> shows that React.FC is generic type and
// <{}> is that we are pluging in concrete types which will be use internaly
// describe my own props object for this functional Component
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          // bind() is a default method which is used to preconfigure a function for future executions
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
