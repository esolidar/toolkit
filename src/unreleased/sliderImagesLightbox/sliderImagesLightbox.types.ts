/* eslint-disable camelcase */
interface Env {
  serverlessResizeImage: string;
  cdn_static_url: string;
}

interface Thumbs {
  standard?: string;
  detail?: string;
  thumb?: string;
}

interface Image {
  crowdfunding_id?: number;
  id: number;
  image: string;
  length?: number;
  thumbs?: Thumbs;
  video?: string;
}

export interface Images extends Array<Image> {}

export interface Props {
  imagesProps: Images;
  videoProps?: string;
  env: Env;
}
