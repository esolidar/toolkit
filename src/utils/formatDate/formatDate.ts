import { format } from 'date-fns';
import { enUS as en, pt, ptBR as br } from 'date-fns/locale';

/**
 * Formats a date according to a specific locale
 * @param {string} date a date in string format: 2022-03-16 15:33:19
 * @param {string} locale the current locale of the application: 'en'
 * @param {Options} options custom options to apply to the formatting
 * @returns {string} formatted date
 */

interface Options {
  size?: number;
  showHours?: boolean;
}

const defaultOptions: Options = {
  size: 1,
  showHours: false,
};

const formatDate = (date: string, locale: string, options: Options = defaultOptions) => {
  const { size, showHours } = { ...defaultOptions, ...options };
  const locales = {
    br,
    en,
    pt,
  };

  let dateFormat = '';

  if (size === 1) dateFormat = locale === 'en' ? 'yyyy-MM-dd' : 'P';
  else if (size === 2) dateFormat = 'MMM d, yyyy';
  else if (size === 3) dateFormat = locale === 'en' ? 'do LLLL yyyy' : 'd LLLL yyyy';

  return format(new Date(date), `${dateFormat}${showHours ? ', p' : ''}`, {
    locale: locales[locale],
  });
};

export default formatDate;
