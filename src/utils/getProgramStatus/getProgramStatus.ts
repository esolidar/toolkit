import { ACCELERATION_PROGRAM } from '../../constants/status';
import convertFromUtcToCustomTimezone from '../dates/convertFromUtcToCustomTimezone';

/**
 * Gets the current status of a given program
 */

interface Args {
  startAt: string;
  closedAt: string;
  endedAt: string;
  archivedAt: string;
  timezone: string;
}

const today = new Date();

const getProgramStatus = ({ startAt, closedAt, endedAt, archivedAt, timezone }: Args): string => {
  const startProgram = convertFromUtcToCustomTimezone(startAt, timezone);
  const closeProgram = convertFromUtcToCustomTimezone(closedAt, timezone);
  const endedProgram = convertFromUtcToCustomTimezone(endedAt, timezone);

  if (startProgram > today && !archivedAt) return ACCELERATION_PROGRAM.soon;
  if (startProgram < today && closeProgram > today && !archivedAt)
    return ACCELERATION_PROGRAM.running;
  if (closeProgram < today && endedProgram > today && !archivedAt)
    return ACCELERATION_PROGRAM.closed;
  if (closeProgram < today || archivedAt) return ACCELERATION_PROGRAM.ended;
};

export default getProgramStatus;
