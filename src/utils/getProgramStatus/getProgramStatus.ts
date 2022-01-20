import moment from 'moment-timezone';

interface Args {
  startAt: string;
  closedAt: string;
  endedAt: string;
  archivedAt: string;
  timezone: string;
}

const today = new Date();
const format = 'YYYY-MM-DD HH:mm:ss';

export const convertToTimezone = (date, timezone) =>
  new Date(new Date(moment.tz(date, timezone).utc().format(format)));

export const getProgramStatus = ({ startAt, closedAt, endedAt, archivedAt, timezone }: Args) => {
  const startProgram = convertToTimezone(startAt, timezone);
  const closeProgram = convertToTimezone(closedAt, timezone);
  const endedProgram = convertToTimezone(endedAt, timezone);

  if (startProgram > today && !archivedAt) return 'soon';
  if (startProgram < today && closeProgram > today && !archivedAt) return 'running';
  if (closeProgram < today && endedProgram > today && !archivedAt) return 'closed';
  if (closeProgram < today || archivedAt) return 'ended';
};
