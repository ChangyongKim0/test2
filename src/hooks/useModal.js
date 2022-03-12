import React, { useReducer, useState } from "react";
import useToggleState from "./useToggle";

const reduceModalStack = (old_state, action) => {
  let state = { ...old_state };
  switch (action.type) {
    case "create":
      state[String(action.id)] = {};
      state[String(action.id)].component = action.component;
      state[String(action.id)].id = true;
      console.log("create " + action.id);
      console.log(state);
      return state;
    case "remove":
      delete state[String(action.id)].component;
      state[String(action.id)].id = false;
      console.log("remove " + action.id);
      console.log(state);
      return state;
  }
};

const reduceToggle = (state, action) => {
  return !state;
};

export const createModalStack = () => {
  let modal_id = -1;
  const getNewModalId = () => {
    modal_id += 1;
    return modal_id;
  };
  const useModalStack = () => {
    const [toggle, setToggle] = useReducer(reduceToggle, false);

    const [modal_stack, handleModalStack] = useReducer(reduceModalStack, {});

    const useModalParam = () => {
      const id = getNewModalId();
      console.log("create useModal reloaded. (ID: " + id + ")");
      let component = <></>;

      const setOpen = (val) => {
        if (!val) {
          handleModalStack({ type: "remove", id: id });
        } else {
          handleModalStack({ type: "create", id: id, component: component });
          console.log("create modal.");
          console.log(component);
        }
        setToggle();
      };

      const registerModal = (new_component) => {
        component = new_component;
      };
      return [toggle, setOpen, registerModal];
    };

    return [modal_stack, useModalParam];
  };
  return useModalStack;
};

export const useModalStack = () => {
  let modal_id = -1;
  const getNewModalId = () => {
    modal_id += 1;
    return modal_id;
  };

  const [toggle, setToggle] = useReducer(reduceToggle, false);

  const [modal_stack, handleModalStack] = useReducer(reduceModalStack, {});

  const useModalParam = () => {
    const id = getNewModalId();
    console.log("create useModal reloaded. (ID: " + id + ")");
    let component = <></>;

    const setOpen = (val) => {
      if (!val) {
        handleModalStack({ type: "remove", id: id });
      } else {
        handleModalStack({ type: "create", id: id, component: component });
        console.log("create modal.");
        console.log(component);
      }
      setToggle();
    };

    const registerModal = (new_component) => {
      component = new_component;
    };
    return [toggle, setOpen, registerModal];
  };

  return [modal_stack, useModalParam];
};

export const useModal = (useModalParam, register_component = <></>) => {
  const [modal_update, setOpen1, registerModal] = useModalParam();
  const [open, setOpen2] = useState(false);
  const setOpen = (state) => {
    setOpen1(state);
    setOpen2(state);
  };
  // registerModal(register_component);
  return [open, setOpen, registerModal, modal_update];
};

// reduceModalState Scheme
// state = {
//     "0": {
//         component: (<></>),
//         setOpen: (, 0) => {},
//         registerModal: (, 0) => {},
//     }
// }
// action = {
//     type: create / remove,
//     component: (<></>)
//     id: 4
// }

export default { useModalStack, useModal };
