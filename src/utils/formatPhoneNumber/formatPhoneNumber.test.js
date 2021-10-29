import '@testing-library/jest-dom';
import formatPhoneNumber from '.';

test('test formatPhoneNumber', () => {
  expect(formatPhoneNumber('208')).toEqual({
    format: '### ### ### ###',
    placeHolder: '351 911 365 854',
  });

  expect(formatPhoneNumber('231')).toEqual({
    format: '## #### ######',
    placeHolder: '44 511 365 854',
  });

  expect(formatPhoneNumber('232')).toEqual({
    format: '# ### ### ####',
    placeHolder: '1 511 365 8546',
  });

  expect(formatPhoneNumber('150')).toEqual({
    format: '(##) ## #### ####',
    placeHolder: '55 51 3655 8546',
  });
});
