/**
 * Card Component
 * Komponenta pro zobrazení obsahu v kartě
 * Podporuje nadpis, obsah a volitelné akce
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} [props.title] - Volitelný nadpis karty
 * @param {React.ReactNode} props.children - Obsah karty
 * @param {React.ReactNode} [props.actions] - Volitelné akce (např. tlačítka) v patičce karty
 * @param {string} [props.className] - Volitelné CSS třídy pro přizpůsobení vzhledu
 * @returns {JSX.Element} Vykreslená karta
 */
export default function Card({ 
  title, 
  children, 
  actions,
  className = '' 
}) {
  return (
    <div className={`
      surface-2 rounded-lg shadow-md overflow-hidden
      border
      ${className}
    `}>
      {/* Nadpis karty */}
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-foreground-800">
            {title}
          </h3>
        </div>
      )}

      {/* Obsah karty */}
      <div className="px-6 py-4">
        {children}
      </div>

      {/* Patička s akcemi */}
      {actions && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {actions}
        </div>
      )}
    </div>
  );
} 