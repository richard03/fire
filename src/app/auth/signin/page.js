/**
 * SignIn Page Component
 * Vlastní přihlašovací stránka s Google autentizací
 * Zobrazuje přihlašovací formulář s Google tlačítkem
 * 
 * @returns {JSX.Element} Vykreslená přihlašovací stránka
 */
'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Kontejner pro přihlašovací formulář */}
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        {/* Nadpis a popis */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Přihlášení</h2>
          <p className="mt-2 text-gray-600">Přihlaste se pomocí svého Google účtu</p>
        </div>
        {/* Google přihlašovací tlačítko */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
  );
} 