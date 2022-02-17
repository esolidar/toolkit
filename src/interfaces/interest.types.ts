import Image from './image.types';

interface Pivot {
  project_config_id: number;
  interest_id: number;
}

interface InterestImage extends Image {
  id: number;
  interest_id: number;
  action: string;
}

interface Interest {
  id: number;
  checked_image: InterestImage;
  created_at: string;
  default_image: InterestImage;
  deleted_at: string | null;
  description_br: string | null;
  description_en: string | null;
  description_pt: string | null;
  disabled_image: InterestImage;
  image: InterestImage;
  name_br: string;
  name_en: string;
  name_pt: string;
  pivot: Pivot;
  updated_at: string;
}

export default Interest;
