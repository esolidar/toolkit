/**
 * Returns the correct text depending on a given lang
 * @param {string} lang current selected lang
 * @param {string} text default text
 * @param {string} textEN english version of the text
 */

const setLocaleTitle = (lang: string, text: string, textEN: string): string => {
  if (lang === 'en') return textEN || text;
  return text;
};

export default setLocaleTitle;
