import slg from 'slugify';

const slugify = (value, replacement = '-', remove = /[?$*_+~./,()'"!\-:@]/g, lower = true) =>
  slg(value, {
    replacement,
    remove,
    lower,
  });

export default slugify;
