/**
 * Adds a parameter to the browser's URL
 * @param {string} name name of the parameter to be created
 * @param {string} value value of the parameter to be created
 */

const addUrlParam = (name: string, value: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  window.history.pushState({ path: url.href }, '', url.href);
};

export default addUrlParam;
