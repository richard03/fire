/**
 * AuthProvider Component
 * Klientský wrapper pro NextAuth SessionProvider
 * Zajišťuje dostupnost autentizačních dat v celé aplikaci
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {React.ReactNode} props.children - Dětské komponenty k vykreslení
 * @returns {JSX.Element} Vykreslený provider
 */
'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
  // SessionProvider poskytuje kontext pro autentizaci v celé aplikaci
  return <SessionProvider>{children}</SessionProvider>;
} 