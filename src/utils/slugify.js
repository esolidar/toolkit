import slg from 'slugify';

const slugify = v =>
  slg(v, {
    replacement: '-',
    remove: /[?$*_+~./,()'"!\-:@]/g,
    lower: true,
  });

export default slugify;
