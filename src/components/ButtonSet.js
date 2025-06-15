/**
 * ButtonSet Component
 * Komponenta pro organizaci skupiny tlačítek
 * Podporuje různé rozložení a zarovnání tlačítek
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {React.ReactNode} props.children - Tlačítka k zobrazení
 * @param {string} [props.layout='horizontal'] - Rozložení tlačítek ('horizontal' | 'vertical')
 * @param {string} [props.align='center'] - Zarovnání tlačítek ('start' | 'center' | 'end')
 * @param {string} [props.gap='2'] - Mezera mezi tlačítky (1-8)
 * @param {string} [props.className] - Volitelné CSS třídy
 * @returns {JSX.Element} Vykreslená skupina tlačítek
 */
export default function ButtonSet({ 
  children, 
  layout = 'horizontal',
  align = 'center',
  gap = '2',
  className = '' 
}) {
  // Definice stylů pro různé rozložení
  const layoutStyles = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col'
  };

  // Definice stylů pro různé zarovnání
  const alignStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end'
  };

  return (
    <div 
      className={`
        ${layoutStyles[layout]}
        ${alignStyles[align]}
        gap-${gap}
        ${className}
      `}
    >
      {children}
    </div>
  );
} 