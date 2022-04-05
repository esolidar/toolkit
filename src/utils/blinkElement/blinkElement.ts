import isDefined from '../isDefined/isDefined';

/**
 * Blinks a given element from the DOM - used in auctions
 * @param {string} elementId id of the element of the DOM that should blink
 * @param {string} className name of the class that holds the blinking animation
 */

const blinkElement = (elementId: string, className: string) => {
  const element = document.getElementById(elementId);
  if (!isDefined(element)) return;

  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, 3000);
};

export default blinkElement;
