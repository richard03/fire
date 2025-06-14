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
 * Komponenta pro vyhledávací formulář
 * @returns {JSX.Element} Vyhledávací formulář
 */
const SearchScreen = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    researchType: '',
    interviewType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="researchType">Typ výzkumu:</label>
        <select
          id="researchType"
          value={formData.researchType}
          onChange={(e) => setFormData({ ...formData, researchType: e.target.value })}
          required
        >
          <option value="">Vyberte typ výzkumu</option>
          <option value="interview">Hloubkový rozhovor</option>
          <option value="test">Uživatelský test</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="interviewType">Způsob rozhovoru:</label>
        <select
          id="interviewType"
          value={formData.interviewType}
          onChange={(e) => setFormData({ ...formData, interviewType: e.target.value })}
          required
        >
          <option value="">Vyberte způsob rozhovoru</option>
          <option value="respondent">Podle možností respondenta</option>
          <option value="onsite">On-site</option>
          <option value="online">Online</option>
        </select>
      </div>

      <button type="submit" className="submit-button">Odeslat</button>
    </form>
  );
};

/**
 * Komponenta pro zobrazení výsledků
 * @param {Object} props - Vlastnosti komponenty
 * @param {Object} props.searchData - Data z vyhledávacího formuláře
 * @param {Function} props.onBack - Funkce pro návrat na vyhledávání
 * @returns {JSX.Element} Komponenta s výsledky
 */
const ResultsScreen = ({ searchData, onBack }) => {
  return (
    <div className="results-screen">
      <h2>Výsledky vyhledávání</h2>
      <div className="results-content">
        <p>Typ výzkumu: {searchData.researchType === 'interview' ? 'Hloubkový rozhovor' : 'Uživatelský test'}</p>
        <p>Způsob rozhovoru: {
          searchData.interviewType === 'respondent' ? 'Podle možností respondenta' :
          searchData.interviewType === 'onsite' ? 'On-site' : 'Online'
        }</p>
      </div>
      <button onClick={onBack} className="back-button">Zpět na vyhledávání</button>
    </div>
  );
};

/**
 * Stránka přihlášeného uživatele
 * @returns {JSX.Element} Hlavní obsah aplikace
 */
const MainContent = () => {
  const [showResults, setShowResults] = React.useState(false);
  const [searchData, setSearchData] = React.useState(null);

  const handleSearch = (data) => {
    setSearchData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setSearchData(null);
  };

  return (
    <div className="main-content">
      {showResults ? (
        <ResultsScreen searchData={searchData} onBack={handleBack} />
      ) : (
        <SearchScreen onSubmit={handleSearch} />
      )}
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