/**
 * Gets the value of a parameter from the browser's URL
 * @param {string} name name of the parameter to be fetched
 * @returns {string} value of the parameter fetched
 */

const getUrlParam = (name: string): string => {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(name);
  }
};

export default getUrlParam;
