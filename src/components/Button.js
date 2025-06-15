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
  variant = 'secondary',
  icon,
  className = '' 
}) {
  // Definice stylů pro různé varianty tlačítka
  const variantStyles = {
    primary: 'primary hover:bg-primary-dark',
    secondary: 'secondary hover:bg-secondary-dark',
    tertiary: 'tertiary hover:bg-tertiary-dark'
  };

  return (
    <button
      onClick={onClick}
      className={`
        font-semibold py-2 px-6 rounded-lg transition-colors border
        flex items-center justify-center gap-2 cursor-pointer
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon}
      {text}
    </button>
  );
} 