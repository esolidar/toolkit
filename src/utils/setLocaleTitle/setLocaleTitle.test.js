import '@testing-library/jest-dom';
import setLocaleTitle from '.';

test('test setLocaleTitle', () => {
  const langEN = 'en';
  const langPT = 'pt';
  const text = 'Title';
  const textEN = 'Title_en';
  const textENNull = null;

  expect(setLocaleTitle(langEN, text, textEN)).toEqual('Title_en');
  expect(setLocaleTitle(langEN, text, textENNull)).toEqual('Title');
  expect(setLocaleTitle(langPT, text, textEN)).toEqual('Title');
});
