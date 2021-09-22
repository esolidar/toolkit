const cursorFocus = elem => {
  const x = window.scrollX;
  const y = window.scrollY;
  window.scrollTo(x, y);
  elem.focus();
};

export default cursorFocus;
