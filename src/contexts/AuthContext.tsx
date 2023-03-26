import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextData {
    isAuthenticated: boolean;
    isAdmin: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    isAdmin: false,
    setIsAuthenticated: () => { },
    setIsAdmin: () => { },
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);



    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, setIsAuthenticated, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);