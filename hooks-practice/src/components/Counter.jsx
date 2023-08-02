import React, { useContext, useReducer, useState } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";
import { ThemeContext } from "../context/themeContext";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const context = useContext(ThemeContext);
  const { darkTheme, toggleTheme } = context;
  const themes = {
    color: darkTheme ? "#ffffff" : "#000000",
    backgroundColor: darkTheme ? "#000000" : "#eeeeee",
  };
  return (
    <>
      <h2>Using useContext and useReducer</h2>
      <button onClick={toggleTheme}>Dark Theme</button>
      <br />
      <div style={themes}>
        <h1>{state.count}</h1>
      </div>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ width: "10rem", fontSize: "large" }}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ width: "10rem", fontSize: "large" }}
      >
        -
      </button>
      <br />
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADDBY", value })}>Add By</button>
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
};

export default Counter;
