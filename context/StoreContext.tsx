import React, { createContext, useState, ReactNode } from "react";

interface StoreContextType {
  url: string;
  token: string;
  setToken: (token: string) => void;
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState<string>("");

  const contextValue = {
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
