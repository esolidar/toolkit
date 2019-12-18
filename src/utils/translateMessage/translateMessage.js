import langPT from '../../staticData/pt';
import langBR from '../../staticData/br';

const translateMessage = (dataTranslate) => {
  const lang = dataTranslate.currentLang || localStorage.lang;
  let text = dataTranslate.defaultMessage;

  switch (lang) {
    case 'pt':
      text = langPT.pt[dataTranslate.id];
      break;

    case 'br':
      text = langBR.br[dataTranslate.id];
      break;

    default:
      text = dataTranslate.defaultMessage;
      break;
  }

  if (text === undefined) {
    // eslint-disable-next-line no-console
    console.error(`[React Intl] Missing message: "${dataTranslate.id}" for locale: "${lang}", using default message as fallback.`);
    text = dataTranslate.defaultMessage;
  }
  return text;
};

export default translateMessage;
