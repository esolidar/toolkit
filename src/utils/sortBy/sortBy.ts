/**
 * Sorts a given array of objects by a given object property
 */

declare type Order = 'asc' | 'desc';

const sortBy = (array: any[], property: string, order: Order = 'asc'): any[] => {
  const compare = (a, b): number => {
    if (a[property] < b[property]) return order === 'asc' ? -1 : 1;
    if (a[property] > b[property]) return order === 'asc' ? 1 : -1;
    return 0;
  };

  return array.sort(compare);
};

export default sortBy;
