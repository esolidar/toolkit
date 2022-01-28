/**
 * Sorts a given array of objects by a given object property
 */

const sortBy = (array: any[], property: string): any[] =>
  array.sort((a, b) => {
    return a[property] - b[property];
  });

export default sortBy;
