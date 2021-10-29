const setLocaleTitle = (lang, textPT, textEN) => {
  if (lang === 'en') return textEN || textPT;
  return textPT || textEN;
};

export default setLocaleTitle;
