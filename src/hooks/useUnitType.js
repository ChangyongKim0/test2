import { createContext, useContext, useMemo, useState } from "react";

export const UnitTypeContext = createContext({
  unit_type: "",
  setUnitType: () => {},
});

const useUnitType = () => {
  const { unit_type, setUnitType } = useContext(UnitTypeContext);
  return [unit_type, setUnitType];
};

export const UnitTypeProvider = ({ children }) => {
  const [unit_type, setUnitType] = useState("py");
  const value = useMemo(() => {
    console.log("unit type refreshed.");
    return { unit_type, setUnitType };
  }, [unit_type, setUnitType]);

  return (
    <UnitTypeContext.Provider value={value}>
      {children}
    </UnitTypeContext.Provider>
  );
};

export default useUnitType;
