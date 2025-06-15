/**
 * LoginPage Component
 * Komponenta pro přihlašovací stránku
 * Obsahuje přihlašovací formulář s Google autentizací
 * 
 * @returns {JSX.Element} Vykreslená přihlašovací stránka
 */
'use client';

import { signIn } from 'next-auth/react';
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

export default function LoginPage() {
  return (
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
  );
} 