import React from 'react';
import './App.css';

/**
 * Hlavní komponenta aplikace
 * @returns {JSX.Element} Vykreslená hlavní komponenta
 */
function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Vítejte v React aplikaci</h1>
      </header>
      <main>
        <p>Toto je základní React aplikace připravená pro komunikaci s PHP API.</p>
      </main>
    </div>
  );
}

export default App; 