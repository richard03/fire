/**
 * HomePage Component
 * Hlavní stránka aplikace s implementací autentizace
 * Zobrazuje různé stavy podle toho, zda je uživatel přihlášený nebo ne
 * 
 * @returns {JSX.Element} Vykreslená hlavní stránka
 */
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Title from '@/components/Title';
import Text from '@/components/Text';

// Markdown text jako konstantní proměnná
const welcomeText = `Pro pokračování se prosím **přihlaste** pomocí svého Google účtu.
### Co získáte přihlášením?
- Přístup k vašemu profilu
- Možnost ukládat data
- Synchronizaci napříč zařízeními`;

export default function HomePage() {
  // Získání informací o aktuálním stavu přihlášení
  const { data: session, status } = useSession();

  // Zobrazení načítacího stavu během ověřování
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Zobrazení přihlašovací obrazovky pro nepřihlášené uživatele
  if (!session) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <Title text="FiRe: NextJS application" />
          <Text 
            content={welcomeText}
            className="mb-8"
          />
          <div className="flex justify-center">
            <button
              onClick={() => signIn('google')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <Image
                src="/google.svg"
                alt="Google logo"
                width={20}
                height={20}
              />
              Přihlásit se přes Google
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Zobrazení přihlášené obrazovky s informacemi o uživateli
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Profilová sekce s fotkou a informacemi o uživateli */}
          <div className="flex items-center gap-4 mb-6">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Vítejte, {session.user?.name}
              </h2>
              <p className="text-gray-600">{session.user?.email}</p>
            </div>
          </div>
          {/* Tlačítko pro odhlášení */}
          <button
            onClick={() => signOut()}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Odhlásit se
          </button>
        </div>
      </div>
    </main>
  );
}
