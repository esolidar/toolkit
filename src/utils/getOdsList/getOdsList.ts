import Ods from '../../interfaces/ods.types';
import getEnvVar from '../getEnvVar';

interface ODS {
  id: number;
  image: string;
  name: string;
  description: string;
}

interface IFormatMessage {
  (param: any): void;
}

const getOdsList = (odsResponse: any, lang: string, formatMessage: IFormatMessage): ODS[] => {
  return odsResponse.map((item: Ods) => {
    if (!item.status) return;

    return {
      id: item.id,
      image: `${getEnvVar('CDN_STATIC_URL')}/frontend/assets/ods/${lang}/${item.tag_name}.png`,
      name: formatMessage({ id: item.tag_name }),
      description: formatMessage({ id: `${item.tag_name}-description` }),
    };
  });
};

export default getOdsList;
