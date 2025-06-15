/**
 * Button Component
 * Reusable button component with customizable styles
 * @param {Object} props - Component props
 * @param {string} props.text - Button text
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Rendered button
 */
export default function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors ${className}`}
    >
      {text}
    </button>
  );
} 