/**
 * Konfigurační soubor pro API endpointy
 * @type {Object}
 */
const config = {
    // Základní URL API - upravte podle vašeho serveru
    apiBaseUrl: process.env.NODE_ENV === 'production' 
        ? '/api'  // Produkční URL
        : 'http://localhost:8000/api', // Vývojová URL
    
    // Další konfigurační parametry
    apiTimeout: 5000, // timeout pro API požadavky v ms
};

export default config; 