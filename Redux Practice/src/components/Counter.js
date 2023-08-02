import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = (value) => {
    dispatch({ type: "increase", amount: value });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
