import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";

export const CookieDataContext = createContext({
  cookie_data: { data: {} },
  handleCookieData: () => {},
});

export const setCookie = (name, value, exp) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

export const getCookie = (name) => {
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

const createCookie = (exp) => {
  let date = new Date();
  let exp_date = new Date();
  const time = date.getTime();
  date.setTime(time);
  exp_date.setTime(time + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    "id=" +
    date.toUTCString() +
    " " +
    time +
    ";expires=" +
    exp_date.toUTCString() +
    ";path=/";
};

const reduceCookieData = (state, action) => {
  let new_state = { ...state };
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
    case "patch":
      axios.patch("/api/cookie", {
        id: new_state.id,
        data: action.data,
        setting: action.setting,
      });
      console.log("successfully patched cookie_data", new_state.id);
      Object.keys(action.data || {}).map((key) => {
        new_state.data[key] = action.data[key];
      });
      return new_state;
    case "add":
      axios.patch("/api/cookie/add", {
        id: new_state.id,
        data: action.data,
        setting: action.setting,
      });
      console.log("successfully added cookie_data", new_state.id);
      Object.keys(action.data || {}).map((key) => {
        if (new_state.data[key] == undefined) {
          new_state.data[key] = [];
        }
        new_state.data[key].push(action.data[key]);
      });
      return new_state;
    case "delete":
      axios.patch("/api/cookie/delete", {
        id: new_state.id,
        data: action.data,
        setting: action.setting,
      });
      console.log("successfully deleted cookie_data", new_state.id);
      Object.keys(action.data || {}).map((key) => {
        if (new_state.data[key] != undefined) {
          new_state.data[key].filter((e) => e.id != action.data[key]);
        }
      });
      return new_state;
    case "update":
      Object.keys(action.data).map((key) => {
        new_state.data[key] = action.data[key];
      });
      new_state.data_updated = true;
      console.log("successfully updated cookie_data", new_state.id);
      return new_state;
    case "default":
  }
};

const useCookieData = () => {
  const { cookie_data, handleCookieData } = useContext(CookieDataContext);
  return [cookie_data, handleCookieData];
};

const _getIPAndLocation = (data) => {
  let date = new Date();
  date.setTime(date.getTime());
  return {
    date: date.toUTCString(),
    ip: data.ip,
    ip_version: data.version,
    city: data.city,
    region: data.region,
    country: data.country,
    country_name: data.country_name,
    continent_code: data.continent_code,
    longitude: data.longitude,
    latitude: data.latitude,
    asn: data.asn,
    org: data.org,
  };
};

export const CookieDataProvider = ({ children }) => {
  const [cookie_data, handleCookieData] = useReducer(reduceCookieData, {
    data: {},
    data_updated: false,
  });
  const value = useMemo(() => {
    console.log("cookie memo rewritten.");
    return { cookie_data, handleCookieData };
  }, [cookie_data, handleCookieData]);

  useEffect(() => {
    // handleCookieData({ type: "delete_cookie", name: "id" });
    handleCookieData({ type: "create" });
    axios.put("/api/cookie", { id: getCookie("id") }).then((request) => {
      console.log("cookie id", cookie_data);
      handleCookieData({
        type: "update",
        data: request.data.data,
      });
    });
    axios.get("https://ipapi.co/json/").then((request) => {
      handleCookieData({
        type: "patch",
        setting: { history: _getIPAndLocation(request.data) },
      });
    });
  }, []);
  // "ip": "2001:2d8:e995:59b6::ef0:80ac",
  //     "version": "IPv6",
  //     "city": "Yeongdeungpo-gu",
  //     "region": "Seoul",
  //     "region_code": "11",
  //     "country": "KR",
  //     "country_name": "South Korea",
  //     "country_code": "KR",
  //     "country_code_iso3": "KOR",
  //     "country_capital": "Seoul",
  //     "country_tld": ".kr",
  //     "continent_code": "AS",
  //     "in_eu": false,
  //     "postal": "07247",
  //     "latitude": 37.5198,
  //     "longitude": 126.9113,
  //     "timezone": "Asia/Seoul",
  //     "utc_offset": "+0900",
  //     "country_calling_code": "+82",
  //     "currency": "KRW",
  //     "currency_name": "Won",
  //     "languages": "ko-KR,en",
  //     "country_area": 98480,
  //     "country_population": 51635256,
  //     "asn": "AS9644",
  //     "org": "SK Telecom"

  return (
    <CookieDataContext.Provider value={value}>
      {children}
    </CookieDataContext.Provider>
  );
};

export default useCookieData;
