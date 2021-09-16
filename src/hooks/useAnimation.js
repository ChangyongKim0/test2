import { useReducer, useEffect } from "react";

const useAnimation = (in_class_name) => {
  const reduceState = (state, action) => {
    if (state.active === action.active && action.active == false) {
      return state;
    } else {
      return action;
    }
  };

  const [state, handleState] = useReducer(reduceState, {
    name: in_class_name,
    active: false,
  });

  const setAnime = (new_class_name, delay_unmount = 0, state) => {
    if (delay_unmount === 0) {
      handleState({ name: new_class_name, active: state });
    } else {
      handleState({ name: new_class_name, active: true });
      setTimeout(() => {
        handleState({ name: "", active: false });
      }, delay_unmount);
    }
  };

  return [state, setAnime];
};

export default useAnimation;
