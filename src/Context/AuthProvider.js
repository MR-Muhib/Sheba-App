import React, { createContext } from "react";
import useCrantial from "../Hooks/useCrantial";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useCrantial();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
