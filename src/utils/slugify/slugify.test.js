import '@testing-library/jest-dom';
import slugify from '.';

test('should return slugify url', () => {
  const expectedString = '34-projecto-de-uma-organizacao';
  expect(slugify('34 projecto de uma organização ?*_+~./,()!:@')).toBe(expectedString);
});

test('should return slugify url with replace arg', () => {
  const expectedString = '34projectodeumaorganizacao';
  const filters = {
    replacement: '',
  };

  expect(slugify('34 projecto de uma organização ?*_+~./,()!:@', filters)).toBe(expectedString);
});

test('should return slugify url with replace arg "x"', () => {
  const expectedString = '34xprojectoxdexumaxorganizacao';
  const filters = {
    replacement: 'x',
  };

  expect(slugify('34 projecto de uma organização ?*_+~./,()!:@', filters)).toBe(expectedString);
});

test('should return slugify url with correct casing', () => {
  const expectedString = '34-Projecto-de-uma-Organizacao';
  const filters = {
    lower: false,
  };

  expect(slugify('34 Projecto de uma Organização ?*_+~./,()!:@', filters)).toBe(expectedString);
});

test('should return slugify url with correct casing', () => {
  const expectedString = 'thee-aredollarmay-vriations-of-passages-of-lorem-ipsum-available-but-999';

  expect(
    slugify('The.e are$ma(y v"riations of passages of Lorem Ipsum available, but :_;999.')
  ).toBe(expectedString);
});
