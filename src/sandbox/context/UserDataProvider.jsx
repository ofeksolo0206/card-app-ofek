import { Box } from "@mui/system";
import React, { createContext, useContext } from "react";

//create context
const userDataContext = createContext();

//create provider
export default function UserDataProvider({ children }) {
  const myData = {
    name: "ofek"
  };

  return (
    <>
    <Box sx={{backgroundColor:"red",width:50,height:50 }}></Box>
    <userDataContext.Provider value={myData}>
      {children}
    </userDataContext.Provider>
    </>
  );
}

export const useUserData = () => {
  const context = useContext(userDataContext);
  if (!context)
    throw new Error("useUserData must be used within a ContextProvider");
  return context;
};