import { useReducer } from "react";

const reduceState = (state, action) => {
  const new_state = { ...state };
  const its_state = new_state[action.name] ?? true;
  new_state[action.name] = !its_state;
  return new_state;
};

const useToggleState = (defaultSetting) => {
  const [state, handleState] = useReducer(reduceState, defaultSetting);
  const toggleState = (name) => {
    handleState({ name: name });
  };
  return [state, toggleState];
};

export default useToggleState;
