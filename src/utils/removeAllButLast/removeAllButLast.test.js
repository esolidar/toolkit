import '@testing-library/jest-dom';
import removeAllButLast from '.';

test('removeAllButLast function', () => {
  const value = '1,000.01';
  const token = '.';

  expect(removeAllButLast(value.replace(/[^\d,.]/g, '').replace(',', '.'), token)).toEqual(
    '1000.01'
  );
  expect(removeAllButLast('1000', '.')).toEqual('1000');
  expect(removeAllButLast('1.000.00', '.')).toEqual('1000.00');
});
