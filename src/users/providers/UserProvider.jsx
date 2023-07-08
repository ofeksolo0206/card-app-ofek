import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getToken, getUser } from "../services/localStorageService";
import { useEffect } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { node } from "prop-types";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(getUser());
    const [token, setToken] = useState(getToken());
    
    useEffect(() => {
        if (!user){
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage);
        }}, [user]);
        
        const value = useMemo(() => 
        ({ user, setUser, token, setToken })
        ,[user, token]);
        
        return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>;
}
        
        export const useUser = () => {
            const context = useContext(UserContext);
            if (!context)
             throw new Error("useUser must be used within a NameProvider");
             return context;};
             
             UserProvider.propTypes = {
                children: node.isRequired,
            };