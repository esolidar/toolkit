import isArray from './isArray';
import isDefined from './isDefined';

const getLocalStorage = (key, defaultValue = {}) => {
  let type;

  try {
    type = isArray(JSON.parse(localStorage[key])) ? 'array' : 'object';
  } catch (err) {
    if (isDefined(localStorage[key])) type = 'string';
  }

  switch (type) {
    case 'object':
    case 'array':
      return JSON.parse(localStorage[key]);

    case 'string':
      return localStorage[key];

    default:
      return defaultValue;
  }
};

export default getLocalStorage;
