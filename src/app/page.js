/**
 * HomePage Component
 * Hlavní stránka aplikace s implementací autentizace
 * Zobrazuje různé stavy podle toho, zda je uživatel přihlášený nebo ne
 * 
 * @returns {JSX.Element} Vykreslená hlavní stránka
 */
'use client';

import { useSession } from 'next-auth/react';
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';

export default function HomePage() {
  // Získání informací o aktuálním stavu přihlášení
  const { status } = useSession();

  // Zobrazení načítacího stavu během ověřování
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        {status === 'authenticated' ? (
          <ProfilePage />
        ) : (
          <LoginPage />
        )}
      </div>
    </main>
  );
}
