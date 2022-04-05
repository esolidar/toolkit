/**
 * Removes a parameter from the browser's URL
 * @param {string} name name of the parameter to be removed
 */

const removeUrlParam = (name: string) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(name);
  window.history.pushState({ path: url.href }, '', url.href);
};

export default removeUrlParam;
