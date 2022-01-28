/**
 * Checks if a given RegExp is valid
 */

const isValidRegex = (regExp: RegExp, value: string): boolean => regExp.test(value);

export default isValidRegex;
