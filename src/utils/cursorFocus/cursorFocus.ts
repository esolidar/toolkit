/**
 * Scrolls to and focus a given element from the DOM
 * @param {string} element element of the DOM that should be focused
 * @param {string} yOffset offset passed to the y axis - used to bypass website's header
 */

const cursorFocus = (element: HTMLElement, yOffset: number = 100) => {
  const { x, y } = element.getBoundingClientRect();
  window.scrollBy(x, y - yOffset);

  if (element) element.focus();
};

export default cursorFocus;
