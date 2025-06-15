import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

/**
 * Komponenta pro vyhledávací obrazovku
 * @param {Object} props - Vlastnosti komponenty
 * @param {Function} props.onSubmit - Callback funkce pro odeslání vyhledávacích dat
 * @returns {JSX.Element} Vyhledávací obrazovka
 */
const SearchScreen = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ searchTerm });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Vyhledávání</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">{user.name}</span>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Odhlásit se
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Vyhledávací dotaz
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Zadejte vyhledávací dotaz"
              required
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Vyhledat
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchScreen; 