/**
 * Returns a given array with its size decreased to a given new size
 * @param {any[]} array array to be resized, ex: [1, 2, 3, 4, 5]
 * @param {number} newSize new size of the array, ex: 3
 * @returns {any[]} resized array, ex: [1, 2, 3]
 */

const resizeArray = (array: any[], newSize: number): any[] => {
  const changeSize = newSize - array.length;

  if (changeSize > 0) return array.concat(Array(changeSize).fill(0));
  return array.slice(0, newSize);
};

export default resizeArray;
