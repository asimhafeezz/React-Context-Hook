import React from "react";
//auth provider
import AuthProvider from "./authProvider";

export default ({ children }) => <AuthProvider>{children}</AuthProvider>;
