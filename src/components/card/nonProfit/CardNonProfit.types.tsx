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
  featured_institution?: boolean;
}

export interface CardBodyProps {
  inline?: boolean;
  summary: string;
  location: string;
  onClickDonate?(): void;
}

interface Props {
  npo: Npo;
  inline?: boolean;
  onClickThumb?(): void;
  onClickDonate(): void;
}

export default Props;
