import { useContext, useState, createContext } from "react";

const periodContext = createContext();

export const Period = ({ children }) => {
  const [period, setPeriod] = useState("monthly");

  return (
    <periodContext.Provider value={[period, setPeriod]}>
      {children}
    </periodContext.Provider>
  );
};

export const usePeriodContext = () => useContext(periodContext);
