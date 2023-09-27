import { useContext, useState, createContext } from "react";

const periodContext = createContext();

export const Period = ({ children }) => {
  const [monthly, setMonthly] = useState(true);

  return (
    <periodContext.Provider value={[monthly, setMonthly]}>
      {children}
    </periodContext.Provider>
  );
};

export const usePeriodContext = () => useContext(periodContext);
