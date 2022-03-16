import getEnvVar from '../../../../utils/getEnvVar';

const getOdsList = (odsResponse, lang, formatMessage) => {
  return odsResponse.map(item => {
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
