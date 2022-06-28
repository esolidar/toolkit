import getEnvVar from '../getEnvVar';

const validateImageSrc = (src: string, cdnEnv: string = 'SERVER_LESS_RESIZE_IMAGE'): string => {
  const urlRegex = /(https?:\/\/[^ ]*)/;
  const url = src?.match(urlRegex);

  let imageSrc = src;
  if (!url) {
    imageSrc = `${getEnvVar(cdnEnv)}/${src}`;
  }

  return imageSrc;
};

export default validateImageSrc;
