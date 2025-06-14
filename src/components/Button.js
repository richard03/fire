import React from 'react';
import PropTypes from 'prop-types';

/**
 * Komponenta pro tlačítko
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.type - Typ tlačítka (submit, button)
 * @param {string} props.variant - Varianta tlačítka (primary, secondary)
 * @param {Function} props.onClick - Callback při kliknutí
 * @param {React.ReactNode} props.children - Obsah tlačítka
 * @returns {JSX.Element} Tlačítko
 */
const Button = ({ type = 'button', variant = 'primary', onClick, children }) => {
  const buttonClass = `button button-${variant}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button; 