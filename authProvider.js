import React from "react";

export const AuthContext = React.createContext();

export default ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const storeValues = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={storeValues}>{children}</AuthContext.Provider>
  );
};
