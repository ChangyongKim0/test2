import { useReducer, useState } from "react";

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

const useModalStack = () => {
  let modal_id = -1;

  const [open, setOpenVal] = useState(false);

  const getNewModalId = () => {
    modal_id += 1;
    return modal_id;
  };

  const [modal_stack, handleModalStack] = useReducer(reduceModalStack, {});

  const createUseModal = () => {
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
      setOpenVal(val);
    };

    const registerModal = (new_component) => {
      component = new_component;
    };
    return [open, setOpen, registerModal];
  };

  return [modal_stack, createUseModal];
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

export default useModalStack;
