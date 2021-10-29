import '@testing-library/jest-dom';
import setLocaleTitle from '.';

test('test setLocaleTitle', () => {
  const langEN = 'en';
  const langPT = 'pt';
  const textPT = 'Title_pt';
  const textEN = 'Title_en';
  const textPTNull = null;
  const textENNull = null;

  expect(setLocaleTitle(langEN, textPT, textEN)).toEqual('Title_en');
  expect(setLocaleTitle(langEN, textPT, textENNull)).toEqual('Title_pt');
  expect(setLocaleTitle(langPT, textPT, textEN)).toEqual('Title_pt');
  expect(setLocaleTitle(langPT, textPTNull, textEN)).toEqual('Title_en');
});
