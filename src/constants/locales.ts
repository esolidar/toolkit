const en = require('@esolidar/i18n/projects/toolkit/en');
const pt = require('@esolidar/i18n/projects/toolkit/pt');
const br = require('@esolidar/i18n/projects/toolkit/br');

export const MESSAGES: any = {
  pt,
  en,
  br,
};

export const SUPPORTED_LOCALES: any = {
  BR: 'br',
  EN: 'en',
  PT: 'pt',
};

export const DEFAULT_LOCALE = SUPPORTED_LOCALES.EN;
