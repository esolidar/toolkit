import { pt, ptBR, enUS } from 'date-fns/locale';

const getFNSDateLocale = (locale: string): any => {
  switch (locale) {
    case 'pt':
      return pt;
    case 'en':
      return enUS;
    case 'br':
      return ptBR;
    default:
      return enUS;
  }
};

export default getFNSDateLocale;
