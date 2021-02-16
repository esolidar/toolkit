import isDefined from './isDefined';

const blinkElement = (elmId, className) => {
  const element = document.getElementById(elmId);
  if (!isDefined(element)) return;
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, 3000);
};

export default blinkElement;
