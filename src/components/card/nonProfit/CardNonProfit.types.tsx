/* eslint-disable camelcase */
interface Npo {
  s3_cover_key: string;
  s3_image_key: string;
  name: string;
  summary: string;
  location: string;
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
