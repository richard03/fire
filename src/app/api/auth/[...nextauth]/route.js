/**
 * NextAuth API Route Configuration
 * Konfigurace autentizačního API endpointu
 * Zajišťuje zpracování přihlašovacích požadavků a Google OAuth integraci
 */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Konfigurace NextAuth handleru
const handler = NextAuth({
  // Seznam poskytovatelů autentizace
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Vlastní stránky pro autentizaci
  pages: {
    signIn: '/auth/signin',
  },
});

// Export handleru pro GET a POST požadavky
export { handler as GET, handler as POST }; 