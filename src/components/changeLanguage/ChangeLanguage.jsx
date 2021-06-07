import React from 'react';
import PropTypes from 'prop-types';

const ChangeLanguage = ({ currentLang, languages, onChangeLang }) => (
  <div className="changeLanguage">
    {languages.map(lang => (
      <button
        key={lang.id}
        type="button"
        onClick={() => onChangeLang(lang.name)}
        className={currentLang === lang.name ? 'active' : ''}
        disabled={currentLang === lang.name}
      >
        {lang.name}
      </button>
    ))}
  </div>
);

ChangeLanguage.propTypes = {
  currentLang: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      translate: PropTypes.string,
    })
  ).isRequired,
  onChangeLang: PropTypes.func.isRequired,
};

export default ChangeLanguage;
