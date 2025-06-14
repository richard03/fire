import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

/**
 * Context pro správu autentizace uživatele
 */
const AuthContext = createContext(null);

/**
 * Provider komponenta pro AuthContext
 * @param {Object} props - Vlastnosti komponenty
 * @param {React.ReactNode} props.children - Dětské komponenty
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Načtení uživatele z localStorage při startu aplikace
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    /**
     * Přihlášení uživatele
     * @param {Object} credential - Google OAuth credential
     */
    const login = (credential) => {
        const decoded = jwtDecode(credential);
        const userData = {
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    /**
     * Odhlášení uživatele
     */
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Hook pro přístup k autentizačnímu kontextu
 * @returns {Object} Autentizační kontext
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 