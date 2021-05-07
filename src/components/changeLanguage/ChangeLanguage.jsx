import PropTypes from 'prop-types';
import Icon from '../icon';

const ChangeLanguage = ({ currentLang, languages, onChangeLang }) => {
  const renderLanguages = languages.map(language => (
    <span key={language.id}>
      <button
        type="button"
        onClick={() => onChangeLang(language.name)}
        className={currentLang === language.name ? 'active' : ''}
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
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      translate: PropTypes.string,
    })
  ).isRequired,
  onChangeLang: PropTypes.func.isRequired,
};
