import '@testing-library/jest-dom';
import filterUnique from '.';

test('should return array without duplicate keys', () => {
  const array = [
    {
      id: 1,
      name: 'Name1',
    },
    {
      id: 2,
      Name: 'Name2',
    },
    {
      id: 1,
      name: 'Name3',
    },
  ];

  const expectArray = [
    {
      id: 1,
      name: 'Name1',
    },
    {
      id: 2,
      Name: 'Name2',
    },
  ];

  filterUnique(array, 'id');
  expect(filterUnique(array, 'id')).toEqual(expectArray);
});
