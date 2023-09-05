import { useContext, useState, createContext } from "react";

const periodContext = createContext();

export const Period = ({ children }) => {
  const [period, setPeriod] = useState(null);

  return (
    <periodContext.Provider value={[period, setPeriod]}>
      {children}
    </periodContext.Provider>
  );
};

export const usePeriodContext = () => useContext(periodContext);
