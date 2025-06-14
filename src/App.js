import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';

/**
 * Komponenta pro zobrazení přihlašovacího tlačítka
 * @returns {JSX.Element} Přihlašovací komponenta
 */
const LoginButton = () => {
  const { login } = useAuth();
  
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        login(credentialResponse.credential);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

/**
 * Komponenta pro zobrazení hlavního obsahu
 * @returns {JSX.Element} Hlavní obsah aplikace
 */
const MainContent = () => {
  const { user, logout } = useAuth();

  return (
    <div className="app-container">
      <header>
        <h1>Vítejte v React aplikaci</h1>
        {user ? (
          <div className="user-info">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <span>Vítejte, {user.name}</span>
            <button onClick={logout} className="logout-button">
              Odhlásit
            </button>
          </div>
        ) : (
          <LoginButton />
        )}
      </header>
      <main>
        <p>Toto je základní React aplikace připravená pro komunikaci s PHP API.</p>
      </main>
    </div>
  );
};

/**
 * Hlavní komponenta aplikace
 * @returns {JSX.Element} Vykreslená hlavní komponenta
 */
function App() {
  return (
    <GoogleOAuthProvider clientId="967451125866-u5kemj2ph7ucf36qgkrsntre674sqsjv.apps.googleusercontent.com">
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App; 