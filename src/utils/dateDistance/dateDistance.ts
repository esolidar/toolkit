import { differenceInWeeks, format, formatDistanceToNowStrict, intervalToDuration } from 'date-fns';
import { enUS, pt, ptBR } from 'date-fns/locale';
import formatDistance from './translations';

/**
 * Return the distance between the given dates in words
 * @param {Date} date date to transform
 * @param {string} locale the locale code
 * @param {any} formatMessage i18n
 * @param {boolean} defaultFNS use default by date-fns
 */

interface Props {
  date: Date;
  formatMessage: any;
  defaultFNS?: boolean;
  locale?: string;
}

const dateDistance = ({ date, formatMessage, defaultFNS = false, locale = 'pt' }: Props) => {
  const dateNow = Date.now();
  const convertedDate = new Date(date);

  let lang;
  let intervalDate;

  // If use default by date-fns
  if (defaultFNS) {
    if (locale === 'pt') {
      lang = pt;
    } else if (locale === 'ptBR') {
      lang = ptBR;
    } else {
      lang = enUS;
    }

    return formatDistanceToNowStrict(convertedDate, {
      addSuffix: true,
      locale: {
        ...lang,
        formatDistance: formatDistance[locale],
      },
    });
  }

  const { days, hours, minutes, months, years } = intervalToDuration({
    start: dateNow,
    end: convertedDate,
  });

  if (years >= 1) {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.years' }, { value: years });
  } else if (months >= 1) {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.months' }, { value: months });
  } else if (days >= 7) {
    const weeks = differenceInWeeks(dateNow, convertedDate);
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.weeks' }, { value: weeks });
  } else if (days < 7 && days >= 1) {
    intervalDate = format(date, 'EEEE');
  } else if (days < 1 && hours >= 1) {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.hours' }, { value: hours });
  } else if (hours < 1 && minutes >= 5) {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.mins' }, { value: minutes });
  } else if (minutes < 5 && minutes >= 1) {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.few' });
  } else {
    intervalDate = formatMessage({ id: 'toolkit.dateDistance.now' });
  }

  return intervalDate;
};

export default dateDistance;
