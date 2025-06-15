/**
 * HomePage Component
 * Main landing page with authentication state handling
 * @returns {JSX.Element} Rendered home page
 */
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Vítejte v Next.js aplikaci
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Pro pokračování se prosím přihlaste
          </p>
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
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
