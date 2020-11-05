import React, { useContext } from "react";
import "./styles.css";

//auth Context
import { AuthContext } from "./authProvider";

export default function App() {
  const authProviderValues = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => authProviderValues.login()}>Login</button>
      <button onClick={() => authProviderValues.logout()}>Logout</button>
      {authProviderValues.isAuthenticated ? (
        <h3>authenticated</h3>
      ) : (
        <h3>Not authenticated</h3>
      )}
    </div>
  );
}
