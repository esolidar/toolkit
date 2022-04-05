/**
 * Sorts a given array of objects by a given object property
 */

const sortBy = (array: any[], property: string): any[] => {
  const compare = (a, b): number => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  };

  return array.sort(compare);
};

export default sortBy;
