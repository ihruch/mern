import React  from "react";

export const AuthContext = React.createContext({
    tokel: null,
    userId: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
});