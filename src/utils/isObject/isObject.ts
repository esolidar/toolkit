import isDefined from '../isDefined';

/**
 * Checks if a given variable is an object
 */

const isObject = (variable: any): boolean =>
  isDefined(variable) && typeof variable === 'object' && !Array.isArray(variable);

export default isObject;
