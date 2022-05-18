/* eslint-disable camelcase */

interface ShortBio {
  en: string;
  pt: string;
  br: string;
}

interface Npo {
  s3_cover_key: string;
  s3_image_key: string;
  name: string;
  location: string;
  short_bio: ShortBio | null;
}

export interface CardBodyProps {
  summary: string;
  location: string;
}

interface Props {
  npo: Npo;
  onClickThumb?(): void;
  onClickDonate(): void;
}

export default Props;
