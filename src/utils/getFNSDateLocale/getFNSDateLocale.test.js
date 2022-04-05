import '@testing-library/jest-dom';
import { pt, ptBR, enUS } from 'date-fns/locale';
import getFNSDateLocale from '.';

test('test getFNSDateLocale', () => {
  expect(getFNSDateLocale('pt')).toEqual(pt);
  expect(getFNSDateLocale('en')).toEqual(enUS);
  expect(getFNSDateLocale('br')).toEqual(ptBR);
  expect(getFNSDateLocale('es')).toEqual(enUS);
});
