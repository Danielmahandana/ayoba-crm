import React, { createContext, useState, ReactNode } from "react";

interface StoreContextType {
  url: string;
  token: string;
  setToken: (token: string) => void;
  customers: any[];
  deals: any[];
  addCustomer: (customer: any) => void;
  addDeal: (deal: any) => void;
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState<string>("");
  const [customers, setCustomers] = useState<any[]>([]);
  const [deals, setDeals] = useState<any[]>([]);

  const addCustomer = (customer: any) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const addDeal = (deal: any) => {
    setDeals((prev) => [...prev, deal]);
  };

  const contextValue = {
    url,
    token,
    setToken,
    customers,
    deals,
    addCustomer,
    addDeal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
