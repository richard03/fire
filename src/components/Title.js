/**
 * Title Component
 * Komponenta pro zobrazení nadpisů různých úrovní
 * Podporuje h1 a h2 nadpisy s odpovídajícím stylováním
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.text - Text nadpisu
 * @param {string} [props.level='h1'] - Úroveň nadpisu ('h1' | 'h2')
 * @param {string} [props.className] - Volitelné CSS třídy pro přizpůsobení vzhledu
 * @returns {JSX.Element} Vykreslený nadpis
 */
export default function Title({ text, level = 'h1', className = '' }) {
  // Definice stylů pro různé úrovně nadpisů
  const levelStyles = {
    h1: 'text-4xl font-bold text-center text-gray-800 mb-8',
    h2: 'text-2xl font-bold text-gray-800 mb-6'
  };

  // Výběr správného HTML elementu podle úrovně
  const HeadingTag = level;

  return (
    <HeadingTag className={`${levelStyles[level]} ${className}`}>
      {text}
    </HeadingTag>
  );
} 