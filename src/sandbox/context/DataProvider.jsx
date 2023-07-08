import React, { createContext, useContext } from "react";

const MyContext = createContext();

export default function DataProvider({ children }) {
  const myData = {
    name: "ofek"
  };

  return <MyContext.Provider value={myData}>{children}</MyContext.Provider>;
}

export const useData = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error("useData must be used within a NameProvider");
  return context;
};
