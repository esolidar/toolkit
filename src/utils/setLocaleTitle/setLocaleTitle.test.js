import '@testing-library/jest-dom';
import setLocaleTitle from '.';

test('test setLocaleTitle', () => {
  const text = 'Title';
  const textEN = 'Title_en';

  expect(setLocaleTitle('en', text, textEN)).toEqual('Title_en');
  expect(setLocaleTitle('en', text, null)).toEqual('Title');
  expect(setLocaleTitle('pt', text, textEN)).toEqual('Title');
});
