import React from 'react';

/**
 * Komponenta pro zobrazení výsledků vyhledávání
 * @param {Object} props - Vlastnosti komponenty
 * @param {Object} props.searchData - Data z vyhledávání
 * @param {Function} props.onBack - Callback funkce pro návrat zpět
 * @returns {JSX.Element} Obrazovka s výsledky
 */
const ResultsScreen = ({ searchData, onBack }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Výsledky vyhledávání</h1>
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Zpět
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          <li className="px-6 py-4">
            <div className="text-sm text-gray-900">
              Vyhledávací dotaz: {searchData.searchTerm}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Zde budou zobrazeny výsledky vyhledávání...
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsScreen; 