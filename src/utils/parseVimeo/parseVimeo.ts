const parseVimeo = (str: string): string => {
  // http://vimeo.com/86164897

  const re = /\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i;
  const matches = re.exec(str);
  return matches && matches[1];
};

export default parseVimeo;
