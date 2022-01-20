import '@testing-library/jest-dom';
import { advanceTo } from 'jest-date-mock';
import { format, addDays, subDays } from 'date-fns';
import { getToday, dateFormat } from '../../constants/date';
import getProgramStatus from '.';

const today = getToday();
const date = new Date();

test('getProgramStatus function with soon status', () => {
  advanceTo(new Date(date));
  const dates = {
    timezone: 'Europe/Lisbon',
    startAt: format(addDays(today, 5), dateFormat),
    closedAt: format(addDays(today, 10), dateFormat),
    endedAt: format(addDays(today, 15), dateFormat),
    archivedAt: null,
  };

  expect(getProgramStatus(dates)).toBe('soon');
});

test('getProgramStatus function with running status', () => {
  advanceTo(new Date(date));
  const dates = {
    timezone: 'Europe/Lisbon',
    startAt: format(subDays(today, 5), dateFormat),
    closedAt: format(addDays(today, 10), dateFormat),
    endedAt: format(addDays(today, 15), dateFormat),
    archivedAt: null,
  };
  expect(getProgramStatus(dates)).toBe('running');
});

test('getProgramStatus function with ended status', () => {
  advanceTo(new Date(date));
  const dates = {
    timezone: 'Europe/Lisbon',
    startAt: format(subDays(today, 10), dateFormat),
    closedAt: format(subDays(today, 5), dateFormat),
    endedAt: format(subDays(today, 1), dateFormat),
    archivedAt: null,
  };
  expect(getProgramStatus(dates)).toBe('ended');
});

test('getProgramStatus function with closed status', () => {
  advanceTo(new Date(date));
  const dates = {
    timezone: 'Europe/Lisbon',
    startAt: format(subDays(today, 10), dateFormat),
    closedAt: format(subDays(today, 5), dateFormat),
    endedAt: format(addDays(today, 1), dateFormat),
    archivedAt: null,
  };
  expect(getProgramStatus(dates)).toBe('closed');
});

test('getProgramStatus function with archived ended status', () => {
  advanceTo(new Date(date));
  const dates = {
    timezone: 'Europe/Lisbon',
    startAt: format(subDays(today, 5), dateFormat),
    closedAt: format(addDays(today, 10), dateFormat),
    endedAt: format(addDays(today, 15), dateFormat),
    archivedAt: format(subDays(today, 1), dateFormat),
  };
  expect(getProgramStatus(dates)).toBe('ended');
});
