import React  from "react";

export const AuthContext = React.createContext({
    login: () => {},
    logout: () => {},
    tokel: null,
    userId: null,
    isAuthenticated: false
});

