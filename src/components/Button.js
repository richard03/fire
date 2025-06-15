/**
 * Button Component
 * Univerzální tlačítko s podporou ikon a různých variant
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.text - Text tlačítka
 * @param {Function} props.onClick - Funkce volaná při kliknutí
 * @param {string} [props.variant='primary'] - Varianta tlačítka ('primary' | 'secondary' | 'danger')
 * @param {React.ReactNode} [props.icon] - Volitelná ikona před textem
 * @param {string} [props.className] - Volitelné CSS třídy
 * @returns {JSX.Element} Vykreslené tlačítko
 */
export default function Button({ 
  text, 
  onClick, 
  variant = 'primary',
  icon,
  className = '' 
}) {
  // Definice stylů pro různé varianty tlačítka
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`
        font-semibold py-2 px-6 rounded-lg transition-colors
        flex items-center justify-center gap-2
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon}
      {text}
    </button>
  );
} 