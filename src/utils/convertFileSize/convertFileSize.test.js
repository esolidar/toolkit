import '@testing-library/jest-dom';
import convertFileSize from '.';

test('call convertFileSize', () => {
  expect(convertFileSize(1513859)).toEqual('1.44 Mb');
  expect(convertFileSize(1513859, 1)).toEqual('1.4 Mb');
  expect(convertFileSize(0)).toEqual('0 Bytes');
  expect(convertFileSize(1024)).toEqual('1 Kb');
  expect(convertFileSize(1234)).toEqual('1.21 Kb');
  expect(convertFileSize(1234, 3)).toEqual('1.205 Kb');
  expect(convertFileSize(1234343223432423423432432432)).toEqual('1021.02 Yb');
  expect(convertFileSize(1234, -1)).toEqual('1 Kb');
});
