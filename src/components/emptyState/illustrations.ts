import sortBy from '../../utils/sortBy';

const variants = ['colored', 'gray'];
const names = [
  '404',
  'Notes',
  'activity',
  'ap-ended',
  'ap-no-program',
  'ap-no-projects',
  'ap-not-started',
  'comments',
  'dashboard',
  'documents',
  'donations',
  'feed',
  'messages',
  'needs',
  'people',
  'success',
  'surveys',
  'updates',
  'upload',
  'vouchers',
  'welcome',
];

const filterIllustrationsBySize = size => {
  const list = [];

  variants.forEach(variant => {
    names.forEach(name => {
      list.push({ name, variant, size });
    });
  });

  return sortBy(list, 'name');
};

export default filterIllustrationsBySize;
