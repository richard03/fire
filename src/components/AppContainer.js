import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import SearchScreen from './SearchScreen';
import ResultsScreen from './ResultsScreen';

/**
 * Hlavní kontejner aplikace
 * @returns {JSX.Element} Hlavní kontejner
 */
const AppContainer = () => {
  const [showResults, setShowResults] = React.useState(false);
  const [searchData, setSearchData] = React.useState(null);
  const { user } = useAuth();

  const handleSearch = (data) => {
    setSearchData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setSearchData(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>Pro pokračování se prosím přihlaste.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {showResults ? (
            <ResultsScreen searchData={searchData} onBack={handleBack} />
          ) : (
            <SearchScreen onSubmit={handleSearch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppContainer; 