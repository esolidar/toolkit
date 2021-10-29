const setLocaleTitle = (lang, text, textEN) => {
  if (lang === 'en') return textEN || text;
  return text;
};

export default setLocaleTitle;
