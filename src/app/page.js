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
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import Card from '@/components/Card';

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
      <main>
        <div className="container mx-auto px-4 py-16">
          <Card>
            <Title text="FiRe: NextJS application" />
            <Text 
              content={welcomeText}
              className="mb-8"
            />
            <ButtonSet>
              <Button
                text="Přihlásit se přes Google"
                variant="secondary"
                onClick={() => signIn('google')}
                icon={
                  <Image
                    src="/google.svg"
                    alt="Google logo"
                    width={20}
                    height={20}
                  />
                }
              />
            </ButtonSet>
          </Card>
        </div>
      </main>
    );
  }

  // Zobrazení přihlášené obrazovky s informacemi o uživateli
  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        <Card>
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
              <Title level="h2" text={`Vítejte, ${session.user?.name}`} />
              <Text content={session.user?.email} />
            </div>
          </div>
          <ButtonSet>
            {/* Tlačítko pro odhlášení */}
            <Button
              text="Odhlásit se"
              onClick={() => signOut()}
              variant="tertiary"
            />
          </ButtonSet>
          
        </Card>
      </div>
    </main>
  );
}
