import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useCookieData from "./useCookieData";

export const UnitTypeContext = createContext({
  unit_type: "",
  setUnitType: () => {},
});

const useUnitType = () => {
  const { unit_type, setUnitType } = useContext(UnitTypeContext);
  return [unit_type, setUnitType];
};

export const UnitTypeProvider = ({ children }) => {
  const [cookie_data, handleCookieData] = useCookieData();
  const [unit_type, setUnitType] = useState("sqm");
  const value = useMemo(() => {
    console.log("unit type refreshed.");
    handleCookieData({ type: "patch", data: { unit_type: unit_type } });
    return { unit_type, setUnitType };
  }, [unit_type, setUnitType]);

  useEffect(() => {
    if (unit_type != cookie_data.data.unit_type) {
      setUnitType(cookie_data.data.unit_type);
    }
  }, [cookie_data.data.unit_type]);

  return (
    <UnitTypeContext.Provider value={value}>
      {children}
    </UnitTypeContext.Provider>
  );
};

export default useUnitType;
