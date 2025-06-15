/**
 * Next.js Configuration
 * Konfigurace Next.js frameworku
 * Obsahuje nastavení pro obrázky a další možnosti
 */
const nextConfig = {
  // Konfigurace pro zpracování obrázků
  images: {
    // Seznam povolených vzdálených zdrojů pro obrázky
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Doména pro Google profilové fotky
        pathname: '/a/**', // Povolení všech cest začínajících /a/
      },
    ],
  },
};

export default nextConfig;
