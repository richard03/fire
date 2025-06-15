/**
 * Title Component
 * Komponenta pro zobrazení hlavního nadpisu
 * Podporuje vlastní text a volitelné CSS třídy
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.text - Text nadpisu
 * @param {string} [props.className] - Volitelné CSS třídy pro přizpůsobení vzhledu
 * @returns {JSX.Element} Vykreslený nadpis
 */
export default function Title({ text, className = '' }) {
  return (
    <h1 className={`text-4xl font-bold text-center text-gray-800 mb-8 ${className}`}>
      {text}
    </h1>
  );
} 