import '@testing-library/jest-dom';
import { youtubeUrl, iban } from '../../constants/regex';
import isValidRegex from '.';

test('verify regex', () => {
  const url = 'https://www.youtube.com/watch?v=6WUT6MMW048&t=91s&ab_channel=eSolidar';
  const urlError = 'test';

  const ibanNumber = 'PT37003506511652559496484';
  const ibanNumberError = '00350651165255949648455555';

  expect(isValidRegex(youtubeUrl, url)).toEqual(true);
  expect(isValidRegex(youtubeUrl, urlError)).toEqual(false);

  expect(isValidRegex(iban, ibanNumber)).toEqual(true);
  expect(isValidRegex(iban, ibanNumberError)).toEqual(false);
});
