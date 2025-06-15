/**
 * ProfilePage Component
 * Komponenta pro stránku profilu uživatele
 * Zobrazuje profilovou fotku, jméno, email a tlačítko pro odhlášení
 * 
 * @returns {JSX.Element} Vykreslená stránka profilu
 */
'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Title from '@/components/Title';
import Text from '@/components/Text';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import Card from '@/components/Card';

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
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
  );
} 