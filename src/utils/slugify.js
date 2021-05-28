import slg from 'slugify';

const slugify = (value, filters = {}) => {
  const { replacement = '-', remove = /[?$*_+~./,()'"!\-:@]/g, lower = true } = filters;

  return slg(value, {
    replacement,
    remove,
    lower,
  });
};

export default slugify;
