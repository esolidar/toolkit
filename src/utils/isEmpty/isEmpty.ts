/**
 * Checks if a given object is empty
 */

const isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;

export default isEmpty;
