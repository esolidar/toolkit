import isArray from '../isArray/isArray';
import isDefined from '../isDefined/isDefined';

/**
 * Gets a value from the browser's local storage
 * @param {string} key name of the key saved in local storage
 * @param {any} defaultValue value to be used in case key does not exist
 * @returns {string} local storage value or default value depending on the key existence
 */

const getLocalStorage = (key: string, defaultValue: any = {}): any => {
  let type;
  const item = localStorage.getItem(key);

  if (!isDefined(item)) {
    type = 'undefined';
  } else {
    try {
      type = isArray(JSON.parse(item)) ? 'array' : 'object';
    } catch (err) {
      if (isDefined(item)) type = 'string';
    }
  }

  switch (type) {
    case 'object':
    case 'array':
      return JSON.parse(item);

    case 'string':
      return item;

    default:
      return defaultValue;
  }
};

export default getLocalStorage;
