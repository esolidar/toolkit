import slg from 'slugify';

/**
 * Returns a given string with special characters being replaced by another given character
 * @param {string} string the string with special characters
 * @param {any} filters filters we want to apply to the string
 * @returns {string} the string with the specials characters replaced
 */

interface Filters {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
}
const defaultFilters: Filters = {
  replacement: '-',
  remove: /[?$*_+~./,()'"!\-:;@]/g,
  lower: true,
};

const slugify = (string: string, filters: Filters = {}): string => {
  const {
    replacement = defaultFilters.replacement,
    remove = defaultFilters.remove,
    lower = defaultFilters.lower,
  } = filters;

  return slg(string, {
    replacement,
    remove,
    lower,
  });
};

export default slugify;
