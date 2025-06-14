import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import FormGroup from './components/FormGroup';
import Select from './components/Select';
import Button from './components/Button';
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

  const researchOptions = [
    { value: 'interview', label: 'Hloubkový rozhovor' },
    { value: 'test', label: 'Uživatelský test' }
  ];

  const interviewOptions = [
    { value: 'respondent', label: 'Podle možností respondenta' },
    { value: 'onsite', label: 'On-site' },
    { value: 'online', label: 'Online' }
  ];

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <FormGroup label="Typ výzkumu:" id="researchType">
        <Select
          id="researchType"
          value={formData.researchType}
          onChange={(e) => setFormData({ ...formData, researchType: e.target.value })}
          options={researchOptions}
          required
        />
      </FormGroup>

      <FormGroup label="Způsob rozhovoru:" id="interviewType">
        <Select
          id="interviewType"
          value={formData.interviewType}
          onChange={(e) => setFormData({ ...formData, interviewType: e.target.value })}
          options={interviewOptions}
          required
        />
      </FormGroup>

      <Button type="submit" variant="primary">
        Odeslat
      </Button>
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