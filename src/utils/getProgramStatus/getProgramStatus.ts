import convertUtcToTimezone from '../convertUtcToTimezone';

interface Args {
  startAt: string;
  closedAt: string;
  endedAt: string;
  archivedAt: string;
  timezone: string;
}

const today = new Date();

const getProgramStatus = ({ startAt, closedAt, endedAt, archivedAt, timezone }: Args) => {
  const startProgram = convertUtcToTimezone(startAt, timezone);
  const closeProgram = convertUtcToTimezone(closedAt, timezone);
  const endedProgram = convertUtcToTimezone(endedAt, timezone);

  if (startProgram > today && !archivedAt) return 'soon';
  if (startProgram < today && closeProgram > today && !archivedAt) return 'running';
  if (closeProgram < today && endedProgram > today && !archivedAt) return 'closed';
  if (closeProgram < today || archivedAt) return 'ended';
};

export default getProgramStatus;
