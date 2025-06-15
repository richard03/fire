import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

/**
 * Kontext pro správu autentizace
 */
const AuthContext = createContext();

/**
 * Provider komponenta pro AuthContext
 * @param {Object} props - Vlastnosti komponenty
 * @param {React.ReactNode} props.children - Dětské komponenty
 * @returns {JSX.Element} Provider komponenta
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Načtení uživatele z localStorage při startu
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  /**
   * Zpracování úspěšného přihlášení
   * @param {Object} credentialResponse - Odpověď z Google OAuth
   */
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const userData = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
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
    <AuthContext.Provider value={{ user, handleLoginSuccess, logout }}>
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