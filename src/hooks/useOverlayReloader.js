import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  useState,
} from "react";
import useCookieData from "./useCookieData";

const reduceOverlayReloader = (state, action) => {
  switch (action.type) {
    case "update data":
      return { data: action.data, is_activated: state.is_activated };
    case "activate":
      if (action.data != undefined) {
        return { data: action.data, is_activated: true };
      } else {
        return { data: state.data, is_activated: true };
      }
    case "deactivate":
      return { data: state.data, is_activated: false };
  }
};

export const OverlayReloaderContext = createContext({
  overlay_reloader: [],
  handleOverlayReloader: () => {},
});

const useOverlayReloader = () => {
  const { overlay_reloader, handleOverlayReloader } = useContext(
    OverlayReloaderContext
  );
  return [overlay_reloader, handleOverlayReloader];
};

export const OverlayReloaderProvider = ({ children }) => {
  const [overlay_reloader, handleOverlayReloader] = useReducer(
    reduceOverlayReloader,
    { data: {}, is_activated: false }
  );
  const value = useMemo(() => {
    console.log("overlay reloader refreshed.");
    return { overlay_reloader, handleOverlayReloader };
  }, [overlay_reloader, handleOverlayReloader]);

  return (
    <OverlayReloaderContext.Provider value={value}>
      {children}
    </OverlayReloaderContext.Provider>
  );
};

export default useOverlayReloader;
