const cursorFocus = (elem, yOffset = 100) => {
  const { x, y } = elem.getBoundingClientRect();
  window.scrollBy(x, y - yOffset);

  if (elem) elem.focus();
};

export default cursorFocus;
