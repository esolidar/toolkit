import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import './ChangeLanguage.scss';

const ChangeLanguage = ({
  currentLang, languages, onChangeLang,
}) => {
  const renderLanguages = languages.map((language) => (
    <span key={language.id}>
      <button
        type="button"
        onClick={() => onChangeLang(language.name)}
        className={(currentLang === language.name ? 'active' : '')}
      >
        {language.name}
      </button>
    </span>
  ));

  return (
    <div className="changeLanguage">
      <Icon iconClass="icon-globe" />
      {renderLanguages}
    </div>
  );
};

export default ChangeLanguage;

ChangeLanguage.propTypes = {
  currentLang: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  onChangeLang: PropTypes.func.isRequired,
};
