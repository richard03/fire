/**
 * RootLayout Component
 * Hlavní layout aplikace, který obaluje všechny stránky
 * Obsahuje konfiguraci fontů a metadata pro SEO
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {React.ReactNode} props.children - Dětské komponenty k vykreslení
 * @returns {JSX.Element} Vykreslený layout
 */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers";

// Konfigurace fontu Geist Sans pro hlavní text
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Konfigurace fontu Geist Mono pro monospace text
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata pro SEO a prohlížeč
export const metadata = {
  title: 'Next.js Aplikace',
  description: 'Vytvořeno s Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* AuthProvider zajišťuje dostupnost autentizačních dat v celé aplikaci */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
