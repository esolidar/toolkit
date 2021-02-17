import isArray from './isArray';
import isDefined from './isDefined';

const getLocalStorage = (key, defaultValue = {}) => {
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
