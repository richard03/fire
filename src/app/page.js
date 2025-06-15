/**
 * HomePage Component
 * Main landing page of the application
 * @returns {JSX.Element} Rendered home page
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Vítejte v Next.js aplikaci
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Toto je základní šablona pro vaši novou webovou aplikaci
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Začít
          </button>
        </div>
      </div>
    </main>
  );
}
