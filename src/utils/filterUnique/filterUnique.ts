/**
 * Removes every object from the original array that contain the duplicated key
 * @param {any[]} array array of objects with duplicated keys
 * @param {string} key key of the object that we want to be unique
 * @returns {any[]} filtered array
 */

const filterUnique = (array: any[], key: string): any[] =>
  array.filter((v, i, a) => a.findIndex(t => t[key] === v[key]) === i);

export default filterUnique;
