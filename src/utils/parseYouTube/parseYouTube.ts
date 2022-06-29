const parseYouTube = (str: string): string => {
  // url : //youtube.com/watch?v=Bo_deCOd1HU
  // share : //youtu.be/Bo_deCOd1HU
  // embed : //youtube.com/embed/Bo_deCOd1HU

  const re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_-]+)/i;
  const matches = re.exec(str);

  return matches && matches[1];
};

export default parseYouTube;
