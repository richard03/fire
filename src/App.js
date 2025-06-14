import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';


/**
 * Hlavní komponenta aplikace
 * @returns {JSX.Element} Vykreslená hlavní komponenta
 */
function App() {
  return (
    <GoogleOAuthProvider clientId="967451125866-u5kemj2ph7ucf36qgkrsntre674sqsjv.apps.googleusercontent.com">
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

/**
 * Komponenta pro zobrazení hlavního obsahu
 * @returns {JSX.Element} Hlavní obsah aplikace
 */
const AppContainer = () => {
  const { user } = useAuth();

  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        {user ? (
          <MainContent />
          
        ) : (
          <MainContentLogin />
        )}
      </main>
    </div>
  );
};

/**
 * Komponenta pro zobrazení hlavičky
 * @returns {JSX.Element} Hlavička aplikace
 */
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header>
      <h1>Vítejte v React aplikaci</h1>
      {user && (
        <div className="user-info">
          <img src={user.picture} alt={user.name} className="user-avatar" />
          <span>Vítejte, {user.name}</span>
          <button onClick={logout} className="logout-button">
            Odhlásit
          </button>
        </div>
      )}
    </header>
  );
};

/**
 * Stránka přihlášeného uživatele
 * @returns {JSX.Element} Hlavní obsah aplikace
 */
const MainContent = () => {
  return (
    <div>
      <h1>Vítejte v React aplikaci</h1>
    </div>
  );
};

/**
 * Stránka nepřihlášeného uživatele
 * @returns {JSX.Element} Přihlašovací komponenta
 */
const MainContentLogin = () => {
  return (
    <div>
      <LoginButton />
    </div>
  );
};

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

export default App; 