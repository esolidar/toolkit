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
  featured?: boolean;
  stripe_acount?: any;
}

interface Props {
  items: Array<Npo>;
  gridType: 'one' | 'two' | 'multi';
  onClickThumb?(item: any): void;
  onClickDonate(item: any): void;
}

export default Props;
