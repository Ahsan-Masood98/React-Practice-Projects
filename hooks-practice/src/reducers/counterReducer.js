const initialState = {
  count: 0,
};

const counterReducer = (state, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "ADDBY":
      return { count: state.count + parseInt(actions.value) };
    default:
      return state;
  }
};
export { counterReducer, initialState };
