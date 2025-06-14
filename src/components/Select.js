import React from 'react';
import PropTypes from 'prop-types';

/**
 * Komponenta pro výběr z možností
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.id - Unikátní identifikátor selectu
 * @param {string} props.value - Aktuální hodnota
 * @param {Function} props.onChange - Callback při změně hodnoty
 * @param {Array<{value: string, label: string}>} props.options - Možnosti výběru
 * @param {boolean} props.required - Zda je pole povinné
 * @returns {JSX.Element} Select komponenta
 */
const Select = ({ id, value, onChange, options, required = false }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="form-select"
    >
      <option value="">Vyberte možnost</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  required: PropTypes.bool
};

export default Select; 