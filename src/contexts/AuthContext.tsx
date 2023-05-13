import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
interface AuthContextData {
    isAuthenticated: boolean;
    isAdmin: boolean;
    userId: number | null;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    setUserId: React.Dispatch<React.SetStateAction<number | null>>;
    logout: () => void;
}
const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    isAdmin: false,
    userId: null,
    setIsAuthenticated: () => { },
    setIsAdmin: () => { },
    setUserId: () => { },
    logout: () => { }
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const logout = () => {
        setIsAuthenticated(false);
        setIsAdmin(false);
        setUserId(null);
        removeCookie('token');
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, userId, setIsAuthenticated, setIsAdmin, setUserId, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);