import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";

export const CookieDataContext = createContext({
  cookie_data: {},
  handleCookieData: () => {},
});

const setCookie = (name, value, exp) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

const getCookie = (name) => {
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

const createCookie = (exp) => {
  let date = new Date();
  let exp_date = new Date();
  date.setTime(date.getTime());
  exp_date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    "id=" +
    date.toUTCString() +
    ";expires=" +
    exp_date.toUTCString() +
    ";path=/";
};

const reduceCookieData = (state, action) => {
  let new_state = { ...state };
  let cookie_data = {};
  switch (action.type) {
    case "create":
      const id = getCookie("id");
      if (!id) {
        createCookie(365);
        console.log("created cookie.");
        new_state.id = getCookie("id");
      } else {
        console.log("cookie already set: ID=" + id);
        new_state.id = id;
      }
      cookie_data = axios.put("/api/cookie", { id: new_state.id });
      new_state.data = cookie_data.data;
      return new_state;
    case "set_cookie":
      setCookie(action.name, action.value, action.exp);
      console.log(
        "successfully set cookie: NAME=" +
          action.name +
          "; VALUE=" +
          action.value +
          "."
      );
      new_state[action.name] = action.value;
      return new_state;
    case "get_cookie":
      const value = getCookie(action.name);
      console.log(
        "successfully got cookie: NAME=" +
          action.name +
          "; VALUE=" +
          value +
          "."
      );
      new_state[action.name] = value;
      return new_state;
    case "delete_cookie":
      deleteCookie(action.name);
      console.log("successfully deleted cookie: NAME=" + action.name + ".");
      new_state[action.name] = null;
      return new_state;
    case "set":
      axios.patch("/api/cookie", {
        id: new_state.id,
        data: action.data,
        setting: action.setting,
      });
      console.log("successfully set cookie_data");
      Object.keys(action.data || {}).map((key) => {
        new_state.data[key] = action.data[key];
      });
      return new_state;
    case "get":
      cookie_data = axios.put("/api/cookie", { id: new_state.id });
      console.log("successfully get cookie_data");
      new_state = cookie_data;
      return new_state;
    case "default":
  }
};

const useCookieData = () => {
  const { cookie_data, handleCookieData } = useContext(CookieDataContext);
  return [cookie_data, handleCookieData];
};

export const CookieDataProvider = ({ children }) => {
  const [cookie_data, handleCookieData] = useReducer(reduceCookieData, {});
  const value = useMemo(() => {
    console.log("cookie memo rewritten.");
    return { cookie_data, handleCookieData };
  }, [cookie_data, handleCookieData]);

  useEffect(() => {
    handleCookieData({ type: "create" });
    axios.get("https://ipapi.co/json/").then((data) => {
      console.log("ip address is", data);
      handleCookieData({ type: "set", setting: { history: data.data } });
    });
  }, []);

  return (
    <CookieDataContext.Provider value={value}>
      {children}
    </CookieDataContext.Provider>
  );
};

export default useCookieData;
