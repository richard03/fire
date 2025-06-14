import React from 'react';
import PropTypes from 'prop-types';

/**
 * Komponenta pro skupinu formulářových prvků
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.label - Popisek skupiny
 * @param {string} props.id - Unikátní identifikátor skupiny
 * @param {React.ReactNode} props.children - Dětské komponenty (formulářové prvky)
 * @returns {JSX.Element} Formulářová skupina
 */
const FormGroup = ({ label, id, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormGroup; 